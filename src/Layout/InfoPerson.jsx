function InfoPerson() {
  return (
    <div className="md:mt-10 ml-3 md:ml-0">
      <h4 className="text-[0.9rem]">Frontend Developer</h4>
      <h2 className="text-title-small leading-10">Szymon Świercz</h2>
      <p className="text-[0.8rem] md:w-[500px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        beatae dolore voluptatibus cupiditate, odit voluptatem.
      </p>
      <div className="flex gap-x-10">
        <div className="box-div">
          <svg
            version="1.0"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            enableBackground="new 0 0 64 64"
            className="w-[20px] h-[20px]"
          >
            <path
              d="M60,8H4c-2.211,0-4,1.789-4,4v40c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4V12C64,9.789,62.211,8,60,8z
	 M4,10h56c1.104,0,2,0.896,2,2v2.469L32,36.754L2,14.469V12C2,10.896,2.896,10,4,10z M60,54H4c-1.104,0-2-0.896-2-2v-2.808
	l18.584-13.381c0.448-0.322,0.55-0.947,0.228-1.396c-0.322-0.447-0.946-0.549-1.396-0.228L2,46.729V16.961l29.403,21.842
	C31.581,38.935,31.79,39,32,39s0.419-0.065,0.597-0.197L62,16.961v29.768l-17.416-12.54c-0.448-0.322-1.074-0.221-1.396,0.228
	c-0.322,0.448-0.221,1.073,0.228,1.396L62,49.192V52C62,53.104,61.104,54,60,54z"
              className="fill-dark-surface dark:fill-slate-50"
            />
          </svg>
          <p className="text-[0.8rem] md:text-[1rem] ml-2 ">
            swierczszymon2001@wp.pl
          </p>
        </div>
        <div className="box-div">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="stroke-dark-surface dark:stroke-slate-50"
            />
          </svg>
          <p className="text-[0.8rem] md:text-[1rem]">501 798 959</p>
        </div>
      </div>
    </div>
  );
}

export default InfoPerson;
