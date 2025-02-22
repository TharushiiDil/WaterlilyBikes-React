import { CheckCircle2 } from "lucide-react";
import bike from "../assets/bike.png";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div id="workflow" className="pt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Jurney.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center mt-20">
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="border border-neutral-700 rounded-xl w-3/4 flex justify-center items-center p-10">
            <img className="w-3/4" src={bike} alt="bike" />
          </div>
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
