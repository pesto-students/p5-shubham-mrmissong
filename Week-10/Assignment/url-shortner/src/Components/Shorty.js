import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const Shorty = () => {
	const getLocalStorage = () => {
		let url = localStorage.getItem("url");

		if (url) {
			return JSON.parse(localStorage.getItem("url"));
		} else {
			return [];
		}
	};
	const [input, setInput] = useState("");
	const [url, setUrl] = useState(getLocalStorage());
	const [copyState, setCopyState] = useState("copy");
	const shorten = async () => {
		const response = await fetch(
			`https://api.shrtco.de/v2/shorten?url=${input}`
		);
		const data = await response.json();
		console.log(data.result);
		// setUrl(data.result);
		setUrl((old) => [...old, data.result]);
		setInput("");
	};
	//doubt
	const handleCopy = () => {
		if (Array.isArray(url)) {
			navigator.clipboard.writeText(url[url.length - 1].full_short_link);
		}
		setCopyState("Copied!");
	};
	useEffect(() => {
		localStorage.setItem("url", JSON.stringify(url));
	}, [url]);

	return (
		<div className="shorty">
			<div>
				Make long urls short
				<br></br>
			</div>
			<input
				className="inputBox"
				placeholder="enter long url"
				onChange={(e) => setInput(e.target.value)}
			></input>
			<button className="shortenB" onClick={shorten}>
				shorten
			</button>
			<p>{url.full_short_link}</p>
			<div className="results">
				<div className="copier">
					<CopyToClipboard text={url}>
						<button className="copyB" onClick={handleCopy}>
							copy recent
						</button>
					</CopyToClipboard>
				</div>
				<hr></hr>
				<ul>
					{url.map((link) => {
						return <li>{link.full_short_link}</li>;
					})}
				</ul>
			</div>
		</div>
	);
};

export default Shorty;
