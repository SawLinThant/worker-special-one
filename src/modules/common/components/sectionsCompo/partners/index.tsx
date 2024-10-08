import React from "react";
import { Cobe } from "../../globe3D";
import { FaHandshake } from "react-icons/fa6";
import { useInView } from "react-intersection-observer";

const Partners = () => {
  const PARTNERS = [
    {
      id: "1",
      country: "Malaysia",
      flag: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <rect
            x="1"
            y="4"
            width="30"
            height="24"
            rx="4"
            ry="4"
            fill="#fff"
          ></rect>
          <path
            d="M1.638,5.847H30.362c-.711-1.108-1.948-1.847-3.362-1.847H5c-1.415,0-2.651,.739-3.362,1.847Z"
            fill="#bc271a"
          ></path>
          <path
            d="M1.031,7.692c-.008,.103-.031,.202-.031,.308v1.539H31v-1.539c0-.105-.023-.204-.031-.308H1.031Z"
            fill="#bc271a"
          ></path>
          <path fill="#bc271a" d="M1 11.384H31V13.231H1z"></path>
          <path fill="#bc271a" d="M1 15.077H31V16.924H1z"></path>
          <path fill="#bc271a" d="M1 18.769H31V20.616H1z"></path>
          <path
            d="M1,24c0,.105,.023,.204,.031,.308H30.969c.008-.103,.031-.202,.031-.308v-1.539H1v1.539Z"
            fill="#bc271a"
          ></path>
          <path
            d="M30.362,26.153H1.638c.711,1.108,1.948,1.847,3.362,1.847H27c1.415,0,2.651-.739,3.362-1.847Z"
            fill="#bc271a"
          ></path>
          <path
            d="M16,4H5c-2.209,0-4,1.791-4,4v10.769h15V4Z"
            fill="#010062"
          ></path>
          <path
            d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
            opacity=".15"
          ></path>
          <path
            d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
            fill="#fff"
            opacity=".2"
          ></path>
          <path
            fill="#f6cd46"
            d="M11.639 8.108L11.931 10.106 13.061 8.432 12.455 10.36 14.2 9.342 12.818 10.816 14.833 10.655 12.949 11.384 14.833 12.113 12.818 11.952 14.2 13.427 12.455 12.408 13.061 14.336 11.931 12.662 11.639 14.661 11.346 12.662 10.216 14.336 10.822 12.408 9.077 13.427 10.459 11.952 8.444 12.113 10.328 11.384 8.444 10.655 10.459 10.816 9.077 9.342 10.822 10.36 10.216 8.432 11.346 10.106 11.639 8.108z"
          ></path>
          <path
            d="M10,8.189c-1.764-.783-3.829,.013-4.612,1.777-.783,1.764,.013,3.829,1.777,4.612,.903,.4,1.932,.4,2.835,0-1.764,1.266-4.221,.862-5.487-.903s-.862-4.221,.903-5.487c1.37-.983,3.214-.983,4.584,0Z"
            fill="#f6cd46"
          ></path>
        </svg>
      ),
    },
    {
      id: "2",
      country: "Singapore",
      flag: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <path
            d="M1,24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V15H1v9Z"
            fill="#fff"
          ></path>
          <path
            d="M27,4H5c-2.209,0-4,1.791-4,4v8H31V8c0-2.209-1.791-4-4-4Z"
            fill="#db3c3f"
          ></path>
          <path
            d="M5,28H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4ZM2,8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8Z"
            opacity=".15"
          ></path>
          <path
            d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
            fill="#fff"
            opacity=".2"
          ></path>
          <path
            d="M6.811,10.5c0-1.898,1.321-3.487,3.094-3.897-.291-.067-.594-.103-.906-.103-2.209,0-4,1.791-4,4s1.791,4,4,4c.311,0,.615-.036,.906-.103-1.773-.41-3.094-1.999-3.094-3.897Z"
            fill="#fff"
          ></path>
          <path
            fill="#fff"
            d="M10.81 8.329L10.576 9.048 11.189 8.603 11.801 9.048 11.567 8.329 12.179 7.884 11.423 7.884 11.189 7.164 10.955 7.884 10.198 7.884 10.81 8.329z"
          ></path>
          <path
            fill="#fff"
            d="M14.361 9.469L13.605 9.469 13.371 8.749 13.137 9.469 12.38 9.469 12.992 9.914 12.759 10.634 13.371 10.189 13.983 10.634 13.749 9.914 14.361 9.469z"
          ></path>
          <path
            fill="#fff"
            d="M10.074 12.034L9.84 11.315 9.606 12.034 8.85 12.034 9.462 12.479 9.228 13.199 9.84 12.754 10.452 13.199 10.218 12.479 10.831 12.034 10.074 12.034z"
          ></path>
          <path
            fill="#fff"
            d="M12.771 12.034L12.537 11.315 12.303 12.034 11.547 12.034 12.159 12.479 11.925 13.199 12.537 12.754 13.149 13.199 12.916 12.479 13.528 12.034 12.771 12.034z"
          ></path>
          <path
            fill="#fff"
            d="M9.24 9.469L9.007 8.75 8.773 9.469 8.016 9.469 8.628 9.914 8.394 10.634 9.007 10.189 9.619 10.634 9.385 9.914 9.997 9.469 9.24 9.469z"
          ></path>
        </svg>
      ),
    },
    {
      id: "3",
      country: "Japan",
      flag: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <rect
            x="1"
            y="4"
            width="30"
            height="24"
            rx="4"
            ry="4"
            fill="#fff"
          ></rect>
          <path
            d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
            opacity=".15"
          ></path>
          <circle cx="16" cy="16" r="6" fill="#ae232f"></circle>
          <path
            d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
            fill="#fff"
            opacity=".2"
          ></path>
        </svg>
      ),
    },
    {
      id: "4",
      country: "Laos",
      flag: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <path fill="#0b2364" d="M1 10H31V22H1z"></path>
          <path
            d="M5,4H27c2.208,0,4,1.792,4,4v3H1v-3c0-2.208,1.792-4,4-4Z"
            fill="#be2a2c"
          ></path>
          <path
            d="M5,21H27c2.208,0,4,1.792,4,4v3H1v-3c0-2.208,1.792-4,4-4Z"
            transform="rotate(180 16 24.5)"
            fill="#be2a2c"
          ></path>
          <path
            d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
            opacity=".15"
          ></path>
          <circle cx="16" cy="16" r="4" fill="#fff"></circle>
          <path
            d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
            fill="#fff"
            opacity=".2"
          ></path>
        </svg>
      ),
    },
    {
      id: "5",
      country: "Cambodia",
      flag: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
        >
          <path fill="#ce2c2d" d="M1 8H31V24H1z"></path>
          <path
            d="M5,4H27c2.208,0,4,1.792,4,4v2H1v-2c0-2.208,1.792-4,4-4Z"
            fill="#0f299c"
          ></path>
          <path
            d="M5,22H27c2.208,0,4,1.792,4,4v2H1v-2c0-2.208,1.792-4,4-4Z"
            transform="rotate(180 16 25)"
            fill="#0f299c"
          ></path>
          <path
            d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
            opacity=".15"
          ></path>
          <path
            d="M23,19.56h-.349v-.676h-.349v-.577h-.347v-.435h-.207v-.337c-1.181,.12-.041-2.08-.268-2.706-.088-.009-.162,.047-.201,.106,.061-.16-.094-.609-.184-.242h-.181v-.487c-.454,.425-.108,.088-.26-.33-.01,.067-.09,.196-.123,.185,.068-.165,.156-.285,.036-.509-.147,.466,.042-.047-.102-.253-.007,.054-.06,.209-.069,.197,.05-.796-.769-.795-.718,0-.009,.012-.062-.143-.069-.197-.143,.206,.045,.719-.102,.253-.121,.225-.033,.344,.036,.509-.033,.011-.113-.117-.123-.184-.152,.418,.194,.755-.26,.33v.852h-.219c.024-.097-.19-.093-.159,.002h-1.3l.002-.783c-.201,.078-.192,.183-.189,.307-.227,.098-.265-.318-.043-.304v-.323c-.041,.009-.158,.007-.262,.165v-.082c-.137-.012-.138,.117-.141,.367h-.036c-.098-.348,.306-.505,.096-.845-.337,.542,.262-.405-.03-.57-.267,.722,.085-.266-.144-.401-.175,.661,.045-.217-.104-.27-.232,.429,.065-.11-.094-.215-.166,.279-.063-.112-.049-.184h-.062l.022-.171h-.079l.019-.142h-.137l.013-.144h-.125c.031-.286-.322-.285-.292,0h-.125l.013,.144h-.137l.019,.142h-.079l.022,.171h-.061c.01,.067,.107,.463-.049,.184-.157,.11,.136,.646-.096,.208-.149,.101,.081,.885-.102,.277-.229,.134,.123,1.124-.144,.401-.292,.164,.307,1.112-.03,.57-.21,.341,.195,.498,.096,.845h-.017c-.001-.267,0-.377-.149-.367v.081c-.104-.156-.22-.154-.261-.164v.323c.218-.019,.188,.401-.034,.304,.006-.127,.003-.227-.197-.306v.783h-1.297c.031-.095-.183-.099-.159-.002h-.218v-.852c-.454,.425-.108,.088-.26-.33-.01,.067-.09,.196-.123,.184,.068-.165,.156-.285,.036-.509-.146,.466,.042-.047-.102-.253-.007,.054-.06,.209-.069,.197,.05-.796-.769-.795-.718,0-.009,.012-.062-.143-.069-.197-.143,.206,.045,.719-.102,.253-.121,.225-.032,.344,.036,.509-.033,.011-.113-.117-.123-.185-.152,.419,.194,.755-.26,.33v.487h-.181c-.09-.368-.245,.083-.184,.242-.039-.058-.114-.115-.201-.106-.227,.626,.914,2.824-.269,2.706v.337h-.207v.438l-.347-.003v.578h-.349v.676s-.349,0-.349,0v.724h2.493c.235,0,.683,0,.918,0h0s3.131,0,3.131,0h0c.235,0,.683,0,.918,0h0s3.125,0,3.125,0h0c.235,0,.683,0,.918,0h0s2.499,0,2.499,0v-.724Z"
            fill="#fff"
          ></path>
          <path
            d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
            fill="#fff"
            opacity=".2"
          ></path>
        </svg>
      ),
    },
  ];

  const { ref: PartnersRightRef, inView: PartnersRightInView } = useInView({
    triggerOnce: false,
  });
  return (
    <div id="partners">
      <h1 className=" text-primary  text-4xl  font-extrabold text-center mb-10">
        Our Partners
      </h1>
      <div className=" xl:flex items-center  justify-center flex-1">
        <Cobe />

        <div
          ref={PartnersRightRef}
          className={`${
            PartnersRightInView
              ? "translate-x-0 opacity-100"
              : "translate-x-40 opacity-0"
          } transition-all delay-200 duration-500 ease-in-out shadow-xl bg-primary rounded-2xl`}
        >
          <div className=" m-20 flex-1 items-center justify-start">
            <div className=" text-xl sm:text-3xl text-left my-6 leading-loose  text-white font-bold ">
              <h3>Countries that we got partnerships with</h3>
            </div>
            <div className="w-full h-full flex-col justify-start gap-4 me-60">
              {PARTNERS.map((partner) => (
                <div
                  className="text-lg sm:text-xl flex items-center py-3 text-left text-white"
                  key={partner.id}
                >
                  <span className="pe-2">
                    <FaHandshake />
                  </span>
                <p className="sm:w-40 w-30">  {partner.country}</p>
                  <span className="ps-2">
                  {partner.flag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
