function AsideInfo() {
  return (
    <aside className="bg-dark-surface-container-low  w-[100%] md:w-[400px] px-3 py-2 rounded-lg">
      <h6 className="border-b-[1px] border-dark-outline py-2 border-opacity-30">
        About
      </h6>
      <p className="text-[0.9rem]  border-b-[1px] border-dark-outline py-4 border-opacity-30">
        I am a 3rd-year computer science student. I approach any difficulties
        analytically, paying attention to the smallest of details.
      </p>
      <div className="mt-3 pb-3">
        <div className="flex gap-x-2">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title />

            <g id="Complete">
              <g id="navigation">
                <polyline
                  fill="none"
                  points="12 2.5 4 21.5 12 19.4 20 21.5 12 2.5"
                  stroke="hsl(280, 17%, 90%)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </g>
            </g>
          </svg>
          <p>Warsaw, Poland</p>
        </div>
        <div className="flex gap-x-2 mt-2">
          <svg
            fill="hsl(280, 17%, 90%)"
            width="20px"
            height="20px"
            viewBox="-4 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>college</title>
            <path d="M12.188 7.844l12.188 4.875-12.188 4.844-9.094-3.625c-0.563 0.469-0.969 1.219-1.031 2.063h0.219c0.25 0 0.438 0.188 0.438 0.438v1.156c0 0.25-0.188 0.438-0.438 0.438h-0.156l0.594 6.063c0.031 0.25-0.156 0.469-0.406 0.469h-1.094c-0.25 0-0.438-0.219-0.438-0.469l0.625-6.063h-0.156c-0.25 0-0.469-0.188-0.469-0.438v-1.156c0-0.25 0.219-0.438 0.469-0.438h0.344c0.063-0.906 0.469-1.688 1.031-2.25l-2.625-1.031zM11.844 18.438l0.344 0.125 0.344-0.125 6.688-2.688 0.5 5.531c0.031 0.375-0.219 0.531-0.563 0.375l-2.625-1.344c-0.344-0.188-0.906-0.156-1.219 0.031l-2.531 1.438c-0.313 0.188-0.875 0.188-1.188 0l-2.531-1.438c-0.313-0.188-0.875-0.219-1.188-0.031l-2.656 1.344c-0.344 0.188-0.594 0-0.563-0.375l0.5-5.531z"></path>
          </svg>
          <p>Uniwersytet Kardynała Stefana Wyszyńskiego</p>
        </div>
        <div className="flex gap-x-2 mt-2">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            strokeWidth="3"
            stroke="hsl(280, 17%, 90%)"
            fill="none"
          >
            <path d="M39.93,55.72A24.86,24.86,0,1,1,56.86,32.15a37.24,37.24,0,0,1-.73,6" />
            <path d="M37.86,51.1A47,47,0,0,1,32,56.7" />
            <path d="M32,7A34.14,34.14,0,0,1,43.57,30a34.07,34.07,0,0,1,.09,4.85" />
            <path d="M32,7A34.09,34.09,0,0,0,20.31,32.46c0,16.2,7.28,21,11.66,24.24" />
            <line x1="10.37" y1="19.9" x2="53.75" y2="19.9" />
            <line x1="32" y1="6.99" x2="32" y2="56.7" />
            <line x1="11.05" y1="45.48" x2="37.04" y2="45.48" />
            <line x1="7.14" y1="32.46" x2="56.86" y2="31.85" />
            <path d="M53.57,57,58,52.56l-8-8,4.55-2.91a.38.38,0,0,0-.12-.7L39.14,37.37a.39.39,0,0,0-.46.46L42,53.41a.39.39,0,0,0,.71.13L45.57,49Z" />
          </svg>
          <p className="cursor-pointer">My Website</p>
        </div>
      </div>
    </aside>
  );
}

export default AsideInfo;
