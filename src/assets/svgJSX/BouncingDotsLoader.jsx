const BouncingDotsLoader = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200">
    <circle
      fill="#51A9AB"
      stroke="#ffffff"
      strokeWidth="30"
      r="15"
      cx="40"
      cy="65"
    >
      <animate
        attributeName="cy"
        calcMode="spline"
        dur="1s"
        values="65;135;65;"
        keySplines=".5 0 .5 1;.5 0 .5 1"
        repeatCount="indefinite"
        begin="-.4s"
      />
    </circle>
    <circle
      fill="#51A9AB"
      stroke="#ffffff"
      strokeWidth="30"
      r="15"
      cx="100"
      cy="65"
    >
      <animate
        attributeName="cy"
        calcMode="spline"
        dur="1s"
        values="65;135;65;"
        keySplines=".5 0 .5 1;.5 0 .5 1"
        repeatCount="indefinite"
        begin="-.2s"
      />
    </circle>
    <circle
      fill="#51A9AB"
      stroke="#ffffff"
      strokeWidth="30"
      r="15"
      cx="160"
      cy="65"
    >
      <animate
        attributeName="cy"
        calcMode="spline"
        dur="1s"
        values="65;135;65;"
        keySplines=".5 0 .5 1;.5 0 .5 1"
        repeatCount="indefinite"
        begin="0s"
      />
    </circle>
  </svg>
);

export default BouncingDotsLoader;
