export const Footer = () => {
  return (
    <div className="flex flex-row w-full h-[300px] gap-[200px] px-[50px] mt-[200px] shadow-[0px_0px_2px_1.5px_#6C8EFF] border-t-[0.1px] border-white justify-center py-8">
      <div className="flex flex-col w-[400px]">
        <div className="text-white text-2xl">// Helivan</div>
        <div className="text-white text-med">founders@helivan.io</div>
        <div className="text-white text-med pt-[100px]">© Helivan, Corp</div>
      </div>
      <div className="flex flex-col w-[400px]">
        <div className="flex flex-row gap-2 items-center">
          <div className="text-white text-2xl ">Research</div>
          <div className="text-white text-l pt-[5px]">
            in collaboration with
          </div>
        </div>
        <div className="flex flex-col gap-1 pt-[20px]">
          <div className="text-white">Johns Hopkins University</div>
          <div className="text-white">Microsoft Research</div>
          <div className="text-white">Nomic AI</div>
        </div>
      </div>
      <div className="flex flex-col w-[400px]">
        <div className="text-white text-2xl">Backed by</div>
        <div className="flex flex-row gap-4">
          <div
            onClick={() => {
              window.open("https://www.betaworks.com/", "_blank");
            }}
            className="cursor-pointer shadow-[0px_0px_2px_1.5px_#6C8EFF] flex items-center align-center justify-center px-8 w-min h-[30px] border-[1px] border-white rounded-[110px]"
          >
            <div className="text-white text-med font-alexandria">Betaworks</div>
          </div>
          <div
            onClick={() => {
              window.open("https://www.factorialcap.com/", "_blank");
            }}
            className="cursor-pointer shadow-[0px_0px_2px_1.5px_#6C8EFF] flex items-center align-center justify-center px-8 w-min h-[30px] border-[1px] border-white rounded-[110px]"
          >
            <div className="text-white text-med font-alexandria">Factorial</div>
          </div>
        </div>
      </div>
    </div>
  );
};
