import React from "react";
import { Package } from "lucide-react";
import { Link } from "react-router-dom";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-full py-[50px] px-4 bg-white gap-14">
        <p
          id="packages"
          className="md:text-2xl text-xl font-bold text-green-500"
        >
          Our Packages.
        </p>
        <div className="w-full mx-auto grid md:grid-cols-3 gap-8">
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <Package
              size={50}
              className="w-20 mx-auto mt-[-3rem] bg-transparent"
            />
            <h2 className="text-2xl font-bold text-center py-8">Starter</h2>
            <p className="text-center text-4xl font-bold">$5000</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">20 Business Volume</p>
              <p className="py-2 border-b mx-8">Earn up to Level 3</p>
              <p className="py-2 border-b mx-8">Unlimited Referrals</p>
            </div>
            <Link className="flex justify-center items-center" to="/signup">
              <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
                Get Started
              </button>
            </Link>
          </div>
          <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
            <Package
              size={50}
              className="w-20 mx-auto mt-[-3rem] bg-transparent"
            />
            <h2 className="text-2xl font-bold text-center py-8">Gold</h2>
            <p className="text-center text-4xl font-bold">$10,000</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">40 Business Volume</p>
              <p className="py-2 border-b mx-8">Earn up to Level 4</p>
              <p className="py-2 border-b mx-8">Unlimited Referrals</p>
            </div>
            <Link className="flex justify-center items-center" to="/signup">
              <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
                Get Started
              </button>
            </Link>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <Package
              size={50}
              className="w-20 mx-auto mt-[-3rem] bg-transparent"
            />
            <h2 className="text-2xl font-bold text-center py-8">Diamond</h2>
            <p className="text-center text-4xl font-bold">$20,000</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">80 Business Volume</p>
              <p className="py-2 border-b mx-8">Earn up to Level 4</p>
              <p className="py-2 border-b mx-8">Unlimited Referrals</p>
            </div>
            <Link className="flex justify-center items-center" to="/signup">
              <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
                Get Started
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full mx-auto grid md:grid-cols-3 gap-8 mt-4">
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <Package
              size={50}
              className="w-20 mx-auto mt-[-3rem] bg-transparent"
            />
            <h2 className="text-2xl font-bold text-center py-8">Elite</h2>
            <p className="text-center text-4xl font-bold">$30,000</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">120 Business Volume</p>
              <p className="py-2 border-b mx-8">Earn up to Level 5</p>
              <p className="py-2 border-b mx-8">Unlimited Referrals</p>
            </div>
            <Link className="flex justify-center items-center" to="/signup">
              <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
                Get Started
              </button>
            </Link>
          </div>
          <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
            <Package
              size={50}
              className="w-20 mx-auto mt-[-3rem] bg-transparent"
            />
            <h2 className="text-2xl font-bold text-center py-8">Supreme</h2>
            <p className="text-center text-4xl font-bold">$40,000</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">160 Business Volume</p>
              <p className="py-2 border-b mx-8">Earn up to Level 5</p>
              <p className="py-2 border-b mx-8">Unlimited Referrals</p>
            </div>
            <Link className="flex justify-center items-center" to="/signup">
              <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
                Get Started
              </button>
            </Link>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <Package
              size={50}
              className="w-20 mx-auto mt-[-3rem] bg-transparent"
            />
            <h2 className="text-2xl font-bold text-center py-8">Mega</h2>
            <p className="text-center text-4xl font-bold">$50,000</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">200 Business Volume</p>
              <p className="py-2 border-b mx-8">Earn up to Level 6</p>
              <p className="py-2 border-b mx-8">Unlimited Referrals</p>
            </div>
            <Link className="flex justify-center items-center" to="/signup">
              <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
                Get Started
              </button>
            </Link>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <Package
              size={50}
              className="w-20 mx-auto mt-[-3rem] bg-transparent"
            />
            <h2 className="text-2xl font-bold text-center py-8">Royal</h2>
            <p className="text-center text-4xl font-bold">$100,000</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">400 Business Volume</p>
              <p className="py-2 border-b mx-8">Earn up to Level 6</p>
              <p className="py-2 border-b mx-8">Unlimited Referrals</p>
            </div>
            <Link className="flex justify-center items-center" to="/signup">
              <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
