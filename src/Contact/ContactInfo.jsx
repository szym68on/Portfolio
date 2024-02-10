function ContactInfo() {
  return (
    <div className="flex items-center gap-x-3 mt-5 ">
      <div>
        <svg
          version="1.0"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 64 64"
        >
          <path
            d="M60,8H4c-2.211,0-4,1.789-4,4v40c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4V12C64,9.789,62.211,8,60,8z
	 M4,10h56c1.104,0,2,0.896,2,2v2.469L32,36.754L2,14.469V12C2,10.896,2.896,10,4,10z M60,54H4c-1.104,0-2-0.896-2-2v-2.808
	l18.584-13.381c0.448-0.322,0.55-0.947,0.228-1.396c-0.322-0.447-0.946-0.549-1.396-0.228L2,46.729V16.961l29.403,21.842
	C31.581,38.935,31.79,39,32,39s0.419-0.065,0.597-0.197L62,16.961v29.768l-17.416-12.54c-0.448-0.322-1.074-0.221-1.396,0.228
	c-0.322,0.448-0.221,1.073,0.228,1.396L62,49.192V52C62,53.104,61.104,54,60,54z"
            className=" fill-slate-500"
          />
        </svg>
      </div>
      <div>
        <p className="text-[0.7rem] text-light-on-surface-variant dark:text-dark-on-surface-variant opacity-50">
          Mail
        </p>
        <p className="text-[0.9rem]">swierczszymon2001@wp.pl</p>
      </div>
    </div>
  );
}

export default ContactInfo;
