import axios from "axios";
import { useEffect, useState } from "react";

export const Shorten = () => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  // const [change, setChange] = useState("")
  const [link, setLink] = useState({
    original: "",
    shorten: "",
    copied: false,
  });

  const [links, setLinks] = useState(() => {
    const savedLinks = localStorage.getItem("links");
    if (savedLinks) {
      return JSON.parse(savedLinks);
    } else {
      return [];
    }
  });

  useEffect(() => {
    const getData = async () => {
      if (url.length === 0) {
        return [];
      } else {
        setError("");
        const res = await axios.get(
          `https://api.shrtco.de/v2/shorten?url=${url}`
          );
          setLink({
            original: res.data.result.original_link,
            shorten: res.data.result.full_short_link,
            copied: false,
          });
          localStorage.setItem("links", JSON.stringify(links));
      }
    };
    getData();
  }, [url, links]);

  const handleChange = (e) => {
    e.preventDefault();
    setUrl(e.target.value);
  };

  const inp = document.querySelector("#urlInput");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (url.length === 0 || link.shorten.length === 0) {
      setError("Please add a link.");
    } else {
      setLinks([...links, link]);
      inp.value = "";
    }
  };

  const copyToClipboard = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(e.target.id);
    const newState = links.map(obj => {
      if (obj.original === e.target.value) {
        return {...obj, copied:true}
      } return obj
    });

    setLinks(newState);

  };

  return (
    <div className="pr-32 pl-32 mt-40 mb-10 font-pop transform -translate-y-20 md:p-6 md-v2:text-sm">
      <div className="p-12 bg-inputBack bg-mainPurple rounded-lg sml:p-6">
        <div className="flex flex-row gap-4 items-center justify-center sml:flex-col">
          <input
            type="text"
            className="w-50r h-12 p-2 text-lg rounded-md sml:w-25r sml:h-10 sml:text-sm smm:w-15r sms:w-12r"
            style={{ border: error.length !== 0 ? "2px solid red" : "" }}
            id="urlInput"
            placeholder="Shorten a link here..."
            onChange={handleChange}
          />
          <button
            className="h-12 pr-6 pl-6 bg-mainCyan rounded-md text-mainWhite font-bold hover:opacity-80 active:opacity-100 transition-all duration-200 sml:h-10 sml:text-xs sms:h-8 sms:pr-3 sms:pl-3"
            onClick={handleSubmit}
          >
            Shorten it!
          </button>
        </div>
        <span className="inline-block transfrom translate-x-6 text-mainRed font-bold">
          {error}
        </span>
      </div>
      <div className="mt-3 flex flex-col justify-center gap-4 sms:text-xs">
        {links.map((linkk, i) => {
          return (
            <div
              key={i}
              className="bg-mainWhite pl-2 pr-2 flex flex-row justify-between items-center rounded-md text-mainBlack font-bold sml:flex-col"
            >
              <div className="p-2">{linkk?.original}</div>
              <div className="flex flex-row gap-6 p-1 items-center">
                <a
                  href={linkk?.original}
                  rel="noreferrer"
                  target="_blank"
                  className="text-mainCyan font-bold"
                >
                  {linkk?.shorten}
                </a>
                <div>
                  {!linkk.copied ? (
                    <button
                      className="text-mainWhite bg-mainCyan p-2 pl-6 pr-6 rounded-lg font-bold hover:opacity-70 sms:p-2 sms:text-xs"
                      value={linkk?.original}
                      id={linkk?.shorten}
                      onClick={copyToClipboard}
                    >
                      Copy
                    </button>
                  ) : (
                    <button className="text-mainWhite bg-mainPurple p-2 pl-6 pr-6 rounded-lg font-bold sms:p-2 sms:text-xs" id={linkk.shorten} onClick={copyToClipboard}>
                      Copied
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Shorten;
