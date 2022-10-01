# Browser flow

## Introduction

### The earlier models of webpage loading was that the client requested one or more HTTP requests and the server side responded to it. In the present day, websites can be data driven and to make things more efficient, fetching and loading huge chunks of code to reload simple things can become a hassle. This is where **APIs (Application Programming Interfaces)** come into play.

![alt text](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data/traditional-loading.svg)
![alt text](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data/fetch-update.svg)

### Many browsers use inbuilt JS API's to fetch data on the webpage without a page load. The Fetch API is a modern alternative that facilitates asynchronous HTTP requests.

### AJAX stands for Asynchronous JavaScript And XML.Ajax is gradually being replaced by functions within JavaScript frameworks and the official Fetch API Standard. It allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes.

![alt text](https://udn.realityripple.com/static/external/1c/92acfdf7cd2fa43cfa163e3c29c65d6432418b44eb808b659d24856fee4d13.png)

### HTTP works as a request-response protocol between a client and a server. HTTP methods include-

> GET
> POST
> PUT
> HEAD
> DELETE
> PATCH
> OPTIONS
> CONNECT
> TRACE

#### GET & POST are mostly used. GET is used to request data from a specified resource whereas POST is used to send data to a server to create/update a resource.

### Rendering engines are used by the browsers to draw text and images on the screen. Common browsers and their rendering engines are-

> Google Chrome - BLink
> Mozilla - Gecko
> Edge - Edge HTML
> Safari - WebKit

## Procedure

- ### _The client requests for a website by typing in a URL on their browser._

- ### _The web browser does a DNS lookup and sends a DNS request for the requested site. This is facilitated by **TCP/IP**_
  ![alt text](https://media.geeksforgeeks.org/wp-content/uploads/20200822065029/UntitledDiagram.png)
- ### _The DNS server further sends a reply in the form of the IP address of the requested site._

- ### _Then the given request goes to the given IP address and the server returns the response._

- ### _The browser finds the HTML and starts the rendering process._

![alt text](https://programmingsoup.com/images/Critical-Rendering-Path.png)

- ### _The browser converts the **bytes** to **characters** and then to **tokens.** The tokens are then converted to **nodes**._

  ![alt text](https://blog.logrocket.com/wp-content/uploads/2018/09/image10.jpg)

- ### _The HTML script is first parsed until it finds a link to a CSS sheet, which it then tries to fetch._

  ![alt text](https://miro.medium.com/max/752/1*jL3O3J4KmXBMh1zULLwGgA.png)

- ### _The parsing of both scripts is done sequentially based on the **DOM** of the HTML and the **CSSOM** of the CSS sheet._

![alt text](https://bitsofco.de/content/images/2017/01/DOM.png)
![alt text](https://bitsofco.de/content/images/2017/01/CSSOM.png)

- ### _The browser combines the DOM and CSSOM trees into something called a render tree._

- ### _The browser then calculates the positions of the element and their styles and forms a layout based on the DOM and CSSOM._

- ### _This layout is further painted by the browser and the output is sent to the client._

## References

- http://developer.mozilla.org automatic! [Mozilla](http://developer.mozilla.org)
- https://programmingsoup.com automatic! [ProgrammingSoup] (https://programmingsoup.com)
- https://web.dev/ automatic! [WebDev] (https://web.dev/)
