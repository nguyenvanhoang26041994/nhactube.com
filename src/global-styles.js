import { createGlobalStyle, keyframes } from 'styled-components';

const keletonGlow = keyframes`
  0% {
    border-color: rgba(206,217,224,.2);
    background: rgba(206,217,224,.2);
  }
  100% {
    border-color: rgba(92,112,128,.2);
    background: rgba(92,112,128,.2);
  }
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 14px;
    font-weight: 300;
    font-family: 'Josefin Sans', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    object-fit: cover;
  }

  .container { width: 100%; max-width: 67rem; }
  .hidden { display: none !important; }
  .none-important {
    width: 0 !important;
    height: 0 !important;
    overflow: hidden !important;
    flex-grow: 0 !important;
    opacity: 0 !important;
    transition: all 0.25s !important;
    margin: 0 !important;
  }
  .opacity-0 { opacity: 0; }

  /* FLEX */
  .flex { display: flex; }
  .flex-row { flex-direction: row; }
  .flex-row-reverse { flex-direction: row-reverse; }
  .flex-col { flex-direction: column; }
  .flex-col-reverse { flex-direction: column-reverse; }
  .flex-no-wrap { flex-wrap: nowrap; }
  .flex-wrap { flex-wrap: wrap; }
  .flex-wrap-reverse { flex-wrap: wrap-reverse; }
  .items-stretch { align-items: stretch; }
  .items-start { align-items: flex-start; }
  .items-center { align-items: center; }
  .items-end { align-items: flex-end; }
  .items-baseline { align-items: baseline; }
  .justify-start { justify-content: flex-start; }
  .justify-center { justify-content: center; }
  .justify-end { justify-content: flex-end; }
  .justify-between { justify-content: space-between; }
  .justify-around { justify-content: space-around; }
  .flex-1 { flex: 1 1 0%; }
  .grow-1 { flex-grow: 1; }

  /* WIDTH */
  .w-1\\\/2 { width: 50%; }
  .w-1\\\/3 { width: 33.333333%; }
  .w-2\\\/3 { width: 66.666667%; }
  .w-1\\\/4 { width: 25%; }
  .w-2\\\/4 { width: 50%; }
  .w-3\\\/4 { width: 75%; }
  .w-1\\\/5 { width: 20%; }
  .w-2\\\/5 { width: 40%; }
  .w-3\\\/5 { width: 60%; }
  .w-4\\\/5 { width: 80%; }
  .w-1\\\/6 { width: 16.666667%; }
  .w-2\\\/6 { width: 33.333333%; }
  .w-3\\\/6 { width: 50%; }
  .w-4\\\/6 { width: 66.666667%; }
  .w-5\\\/6 { width: 83.333333%; }
  .w-1\\\/12 { width: 8.333333%; }
  .w-2\\\/12 { width: 16.666667%; }
  .w-3\\\/12 { width: 25%; }
  .w-4\\\/12 { width: 33.333333%; }
  .w-5\\\/12 { width: 41.666667%; }
  .w-6\\\/12 { width: 50%; }
  .w-7\\\/12 { width: 58.333333%; }
  .w-8\\\/12 { width: 66.666667%; }
  .w-9\\\/12 { width: 75%; }
  .w-10\\\/12 { width: 83.333333%; }
  .w-11\\\/12 { width: 91.666667%; }
  .w-full { width: 100%; }

  /* MARGIN */
  .m-0 { margin: 0; }
  .m-1 { margin: 0.25rem; }
  .m-2 { margin: 0.5rem; }
  .m-3 { margin: 0.75rem; }
  .m-4 { margin: 1rem; }
  .m-5 { margin: 1.25rem; }
  .m-6 { margin: 1.5rem; }
  .m-8 { margin: 2rem; }
  .m-10 { margin: 2.5rem; }
  
  .ml-0 { margin-left: 0; }
  .ml-1 { margin-left: 0.25rem; }
  .ml-2 { margin-left: 0.5rem; }
  .ml-3 { margin-left: 0.75rem; }
  .ml-4 { margin-left: 1rem; }
  .ml-5 { margin-left: 1.25rem; }
  .ml-6 { margin-left: 1.5rem; }
  .ml-8 { margin-left: 2rem; }
  .ml-10 { margin-left: 2.5rem; }
  
  .mt-0 { margin-top: 0; }
  .mt-1 { margin-top: 0.25rem; }
  .mt-2 { margin-top: 0.5rem; }
  .mt-3 { margin-top: 0.75rem; }
  .mt-4 { margin-top: 1rem; }
  .mt-5 { margin-top: 1.25rem; }
  .mt-6 { margin-top: 1.5rem; }
  .mt-8 { margin-top: 2rem; }
  .mt-10 { margin-top: 2.5rem; }

  .mr-0 { margin-right: 0; }
  .mr-1 { margin-right: 0.25rem; }
  .mr-2 { margin-right: 0.5rem; }
  .mr-3 { margin-right: 0.75rem; }
  .mr-4 { margin-right: 1rem; }
  .mr-5 { margin-right: 1.25rem; }
  .mr-6 { margin-right: 1.5rem; }
  .mr-8 { margin-right: 2rem; }
  .mr-10 { margin-right: 2.5rem; }

  .mb-0 { margin-bottom: 0; }
  .mb-1 { margin-bottom: 0.25rem; }
  .mb-2 { margin-bottom: 0.5rem; }
  .mb-3 { margin-bottom: 0.75rem; }
  .mb-4 { margin-bottom: 1rem; }
  .mb-5 { margin-bottom: 1.25rem; }
  .mb-6 { margin-bottom: 1.5rem; }
  .mb-8 { margin-bottom: 2rem; }
  .mb-10 { margin-bottom: 2.5rem; }

  .mx-0 { margin-right: 0; margin-left: 0; }
  .mx-1 { margin-right: 0.25rem; margin-left: 0.25rem; }
  .mx-2 { margin-right: 0.5rem; margin-left: 0.5rem; }
  .mx-3 { margin-right: 0.75rem; margin-left: 0.75rem; }
  .mx-4 { margin-right: 1rem; margin-left: 1rem; }
  .mx-5 { margin-right: 1.25rem; margin-left: 1.25rem; }
  .mx-6 { margin-right: 1.5rem; margin-left: 1.5rem; }
  .mx-8 { margin-right: 2rem; margin-left: 2rem; }
  .mx-10 { margin-right: 2.5rem; margin-left: 2.5rem; }
  .mx-auto { margin-right: auto; margin-left: auto; }

  .my-0 { margin-top: 0; margin-bottom: 0; }
  .my-1 { margin-top: 0.25rem; margin-bottom: 0.25rem; }
  .my-2 { margin-top: 0.5rem; margin-bottom: 0.5rem; }
  .my-3 { margin-top: 0.75rem; margin-bottom: 0.75rem; }
  .my-4 { margin-top: 1rem; margin-bottom: 1rem; }
  .my-5 { margin-top: 1.25rem; margin-bottom: 1.25rem; }
  .my-6 { margin-top: 1.5rem; margin-bottom: 1.5rem; }
  .my-8 { margin-top: 2rem; margin-bottom: 2rem; }
  .my-10 { margin-top: 2.5rem; margin-bottom: 2.5rem; }

  /* PADDING */
  .p-0 { padding: 0; }
  .p-1 { padding: 0.25rem; }
  .p-2 { padding: 0.5rem; }
  .p-3 { padding: 0.75rem; }
  .p-4 { padding: 1rem; }
  .p-5 { padding: 1.25rem; }
  .p-6 { padding: 1.5rem; }
  .p-8 { padding: 2rem; }
  .p-10 { padding: 2.5rem; }
  
  .pl-0 { padding-left: 0; }
  .pl-1 { padding-left: 0.25rem; }
  .pl-2 { padding-left: 0.5rem; }
  .pl-3 { padding-left: 0.75rem; }
  .pl-4 { padding-left: 1rem; }
  .pl-5 { padding-left: 1.25rem; }
  .pl-6 { padding-left: 1.5rem; }
  .pl-8 { padding-left: 2rem; }
  .pl-10 { padding-left: 2.5rem; }
  
  .pt-0 { padding-top: 0; }
  .pt-1 { padding-top: 0.25rem; }
  .pt-2 { padding-top: 0.5rem; }
  .pt-3 { padding-top: 0.75rem; }
  .pt-4 { padding-top: 1rem; }
  .pt-5 { padding-top: 1.25rem; }
  .pt-6 { padding-top: 1.5rem; }
  .pt-8 { padding-top: 2rem; }
  .pt-10 { padding-top: 2.5rem; }

  .pr-0 { padding-right: 0; }
  .pr-1 { padding-right: 0.25rem; }
  .pr-2 { padding-right: 0.5rem; }
  .pr-3 { padding-right: 0.75rem; }
  .pr-4 { padding-right: 1rem; }
  .pr-5 { padding-right: 1.25rem; }
  .pr-6 { padding-right: 1.5rem; }
  .pr-8 { padding-right: 2rem; }
  .pr-10 { padding-right: 2.5rem; }

  .pb-0 { padding-bottom: 0; }
  .pb-1 { padding-bottom: 0.25rem; }
  .pb-2 { padding-bottom: 0.5rem; }
  .pb-3 { padding-bottom: 0.75rem; }
  .pb-4 { padding-bottom: 1rem; }
  .pb-5 { padding-bottom: 1.25rem; }
  .pb-6 { padding-bottom: 1.5rem; }
  .pb-8 { padding-bottom: 2rem; }
  .pb-10 { padding-bottom: 2.5rem; }

  .px-0 { padding-right: 0; padding-left: 0; }
  .px-1 { padding-right: 0.25rem; padding-left: 0.25rem; }
  .px-2 { padding-right: 0.5rem; padding-left: 0.5rem; }
  .px-3 { padding-right: 0.75rem; padding-left: 0.75rem; }
  .px-4 { padding-right: 1rem; padding-left: 1rem; }
  .px-5 { padding-right: 1.25rem; padding-left: 1.25rem; }
  .px-6 { padding-right: 1.5rem; padding-left: 1.5rem; }
  .px-8 { padding-right: 2rem; padding-left: 2rem; }
  .px-10 { padding-right: 2.5rem; padding-left: 2.5rem; }

  .py-0 { padding-top: 0; padding-bottom: 0; }
  .py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
  .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
  .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
  .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
  .py-5 { padding-top: 1.25rem; padding-bottom: 1.25rem; }
  .py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
  .py-8 { padding-top: 2rem; padding-bottom: 2rem; }
  .py-10 { padding-top: 2.5rem; padding-bottom: 2.5rem; }

  .ui-skeleton {
    border-color: rgba(206,217,224,.2)!important;
    border-radius: 2px;
    box-shadow: none!important;
    background: rgba(206,217,224,.2);
    background-clip: padding-box!important;
    cursor: default;
    color: transparent!important;
    animation: ${keletonGlow} 1s linear infinite alternate;
    pointer-events: none;
    user-select: none;
  }

  body::-webkit-scrollbar,
  html::-webkit-scrollbar {
    display: none;
  }
`;

export default GlobalStyle;
