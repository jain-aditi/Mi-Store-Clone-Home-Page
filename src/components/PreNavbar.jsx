import React from "react";
import "../styles/PreNav.css";

const cartIcon = <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M5.875 18.333Q5.167 18.333 4.667 17.833Q4.167 17.333 4.167 16.625Q4.167 15.917 4.667 15.417Q5.167 14.917 5.875 14.917Q6.583 14.917 7.083 15.417Q7.583 15.917 7.583 16.625Q7.583 17.333 7.083 17.833Q6.583 18.333 5.875 18.333ZM14.146 18.333Q13.438 18.333 12.938 17.833Q12.438 17.333 12.438 16.625Q12.438 15.917 12.938 15.417Q13.438 14.917 14.146 14.917Q14.854 14.917 15.354 15.417Q15.854 15.917 15.854 16.625Q15.854 17.333 15.354 17.833Q14.854 18.333 14.146 18.333ZM5.229 5.062 7.167 9.146H12.958Q12.958 9.146 12.958 9.146Q12.958 9.146 12.958 9.146L15.188 5.062Q15.188 5.062 15.188 5.062Q15.188 5.062 15.188 5.062ZM4.396 3.312H16.75Q17.292 3.312 17.5 3.75Q17.708 4.188 17.479 4.604L14.479 10Q14.25 10.417 13.854 10.656Q13.458 10.896 12.979 10.896H6.812L5.958 12.458Q5.958 12.458 5.958 12.458Q5.958 12.458 5.958 12.458H15.896V14.208H5.854Q4.917 14.208 4.417 13.365Q3.917 12.521 4.375 11.688L5.458 9.688L2.5 3.417H0.833V1.667H3.604ZM7.167 9.146H12.958Q12.958 9.146 12.958 9.146Q12.958 9.146 12.958 9.146Z"/></svg>
const expandMore = <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20"><path d="M10 12.812 5 7.812 6.229 6.583 10 10.354 13.771 6.583 15 7.812Z"/></svg>

const PreNavbar = () => {
  return (
    <div className="pre-nav">
      <div>
        <a href="https://www.mi.com/in/">XIAOMI INDIA</a>
        <span> | </span>
        <a href="https://in.event.mi.com/in/install-mi-store">
          GET MI STORE APP
        </a>
        <span> | </span>
        <a href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">
          ONLINE HELP
        </a>
        <span> | </span>
        <a href="https://www.mi.com/in/service/authorized_stores/">
          RETAIL STORE {expandMore}
        </a>
      </div>
      <div>
        <a href="https://store.mi.com/in/site/login">SIGN IN</a>
        <span> | </span>
        <a href="https://account.xiaomi.com/pass/register?callback=https%3A%2F%2Fstore.mi.com%2Fin%2Flogin%2Fcallback%3Ffollowup%3Dhttps%253A%252F%252Fwww.mi.com%252Fin%26sign%3DNGQyZTY1M2VjNGNjYTc5NzFlZDc1YmY2ZmM2NDFiYWMwNTU5YzUyNQ%2C%2C&sid=i18n_in_pc_pro&_locale=en_IN">
          SIGN UP
        </a>
        <span> | </span>
        <a href="https://store.mi.com/in/site/login"> {cartIcon} Cart (0) </a>
      </div>
    </div>
  );
};

export default PreNavbar;
