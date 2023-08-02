# BULLETIN-BOARD(NEXT.JS +MONGODB)
BULLETIN BOARD is an open-source story prompting tool for modern world to       discover, create and share creative prompts







https://github.com/PAtrickpp33/BULLETIN-BOARD/assets/89336859/a5b4a976-a33a-4d3d-89c4-7e3680f177ae


## Introduction

 
What I Learned in This Next.js Project:
1. Next.js 13 App Folder Structure:
The Next.js 13 folder structure is intuitive and aligns with the framework's core features. The essential folders include pages for routing, public for static assets, and styles for global styling. The new structure promotes better organization and easier scalability.

2. Next.js 13 Client Components vs Server Components:
Next.js 13 introduces a distinction between Client and Server components. Server Components are rendered on the server and sent to the client, allowing for rich interactions without the weight of the entire component code on the client side. This feature provides performance benefits and optimizes the user experience.

3. Next.js 13 File-based Routing (including dynamic and nested routes):
One of the hallmarks of Next.js is its file-based routing system. By simply adding a file to the pages directory, you create a new route. With Next.js 13, handling dynamic and nested routes has been further streamlined, offering developers increased flexibility.

4. Next.js 13 Special Files - page, layout, loading, and error:
Special files such as _app.js, _document.js, and _error.js give developers the ability to customize higher-level layout structures, handle global styles, and create custom error pages, respectively.

5. Next.js 13 Serverless Route Handlers (Next API, Full Stack Apps):
The built-in API routes in Next.js 13 enable the creation of serverless functions without configuring a backend. These API routes are perfect for building full-stack applications and provide an excellent solution for small to medium-sized projects.

6. Next.js 13 Metadata and Search Engine Optimization (SEO):
Next.js 13 offers seamless integration of meta tags and other SEO-related features. With the next/head module, adding metadata to your pages is straightforward, enhancing visibility on search engines.

7. Three ways to fetch data in Next.js:

Server Side Rendering (SSR): Data is fetched at the request time, and the page is rendered on the server side. Suitable for dynamic content that changes frequently.

Static Site Generation (SSG): Pages are pre-rendered during the build time and served statically. This method provides high performance and is ideal for content that doesn't change often.

Incremental Static Generation (ISR): A hybrid of SSR and SSG. Pages are generated at build time but can be re-generated as new data becomes available. This approach ensures the user sees the latest content without sacrificing the benefits of static optimization.

# Installation and usage
1. Clone this repository
```
[git clone https://github.com/3vdi/superprompts.git](https://github.com/PAtrickpp33/BULLETIN-BOARD.git)
```
2. Install dependencies
```
npm install
```
3. create a new folder .env and inside that folder
```
GOOGLE_ID = [your google id here]
GOOGLE_CLIENT_SECRET = [your client secret id here]
MONGODB_URI = [your mongodb cluster url]

NEXTAUTH_URL = http://localhost:3000
NEXTAUTH_URL_INTERNAL = http://localhost:3000
NEXTAUTHSECRET = [a random secret key] for eg: tvDWxlmy4Weqt2Ky6er7rhBbeft98BsyHspzqHPmkuD=

```
4. Start a new terminal and run the development server
```
npm run dev
```

