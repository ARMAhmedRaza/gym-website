import Image from "next/image";
import { CgGym } from "react-icons/cg";
import { TiTick } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { BiPhoneOutgoing } from "react-icons/bi";

export default function Home() {
  return (
    <div>
      <header className="container absolute z-20">
        <div className=" flex items-center justify-between ">
          <div>
            <Image
              alt="ROOT"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSINbAXc6bPKWGBczZAULJZPD8zMaB6A6phtqe1gLfxbkpM_dfqorSDL25vd9_Z9vxUbLQ&usqp=CAU"
              }
              width={1000}
              height={1000}
              className="  md:w-[160px]   "
            />
          </div>
          <nav>
            <ul className=" flex items-center lg:gap-x-10 gap-x-5 text-xs p-2 ">
              <li className=" text-white cursor-pointer hover:underline">
                Advantages
              </li>
              <li className=" text-white cursor-pointer hover:underline">
                Membership
              </li>
              <li className=" text-white cursor-pointer hover:underline">
                About
              </li>
              <li className=" text-white cursor-pointer hover:underline">
                Trainers
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="HomeImage relative">
        <div className=" container absolute lg:top-72 top-32" >
          <h1 className=" text-white lg:text-5xl text-4xl font-bold  lg:w-[500px] w-auto leading-[3.5rem]  ">
            Free Trail Session With A trainer
          </h1>
          <button
            type="button"
            class="text-black mt-5 bg-yellow-600 hover:bg-yellow-400 rounded-full text-2x1 text px-8 py-3 text-center"
          >
            Detailed
          </button>
        </div>
      </div>

      <div className="container lg:my-20 text-white">
        <h2 className=" font-bold text-5xl lg:mb-16 mb-5">Reason To Join</h2>

        <div className=" items-center gap-x-2 grid w-full md:grid-cols-2 ">
          <div className=" items-center flex gap-x-4 p-5 w-full">
            <div>
              <CgGym className=" w-10 h-10 text-yellow-400" />{" "}
            </div>
            <div className=" space-y-1">
              <span className=" font-bold"> 15000 sq.m</span>
              <p className=" text-[0.8rem]">
                {" "}
                Gym is the activity of doing physical exercises{" "}
              </p>
            </div>
          </div>
          <div className=" items-center flex gap-x-4 p-5 w-full">
            <div>
              <CgGym className=" w-10 h-10 text-yellow-400" />{" "}
            </div>
            <div className=" space-y-1">
              <span className=" font-bold"> 15000 sq.m</span>
              <p className=" text-[0.8rem]">
                {" "}
                Gym is the activity of doing physical exercises{" "}
              </p>
            </div>
          </div>
          <div className=" items-center flex gap-x-4 p-5 w-full">
            <div>
              <CgGym className=" w-10 h-10 text-yellow-400" />{" "}
            </div>
            <div className=" space-y-1">
              <span className=" font-bold"> 15000 sq.m</span>
              <p className=" text-[0.8rem]">
                {" "}
                Gym is the activity of doing physical exercises{" "}
              </p>
            </div>
          </div>
          <div className=" items-center flex gap-x-4 p-5 w-full">
            <div>
              <CgGym className=" w-10 h-10 text-yellow-400" />{" "}
            </div>
            <div className=" space-y-1">
              <span className=" font-bold"> 15000 sq.m</span>
              <p className=" text-[0.8rem]">
                {" "}
                Gym is the activity of doing physical exercises{" "}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container lg:mb-20">
        <div>
          <h2 className=" font-bold text-5xl  text-white text-center lg:mb-16 mb-5">
            Reason To Join
          </h2>
        </div>
        <div className="grid lg:gap-20 gap-10 lg:grid-cols-3 md:grid-cols-2">
          <div className="bg-gray-800 w-full rounded-lg text-center flex flex-col relative h-60  hover:bg-gray-900">
            <span className=" font-bold text-white mt-4   ">Pass Trail </span>
            <span className=" font-bold text-white ">$ 0 </span>
            <div className="h-0.5 mt-2 bg-black"></div>
            <div className="p-2 flex flex-col gap-2 items-center justify-center  ">
              <div className="flex gap-2 items-center ">
                <TiTick className=" w-5 h-5 text-white -400" />
                <p className="text-white text-xs pt-3">
                  Assess To The Gym 8.pm to 14.pm
                </p>
              </div>

              <div className="flex gap-2 items-center  ">
                <TiTick className=" w-5 h-5 text-white -400" />
                <p className="text-white text-xs pt-3">
                  Assess To The Gym 8.pm to 14.pm
                </p>
              </div>
            </div>
            <div className="px-2">
              <button className=" bg-yellow-600 hover:bg-yellow-400 rounded-full text-2x1 text px-4 py-2  text-center mt-8">
                BUY
              </button>
            </div>
          </div>
          <div className="bg-gray-800 w-full rounded-lg text-center flex flex-col relative h-60  hover:bg-gray-900">
            <span className=" font-bold text-white mt-4   ">Pass Trail </span>
            <span className=" font-bold text-white ">$ 0 </span>
            <div className="h-0.5 mt-2 bg-black"></div>
            <div className="p-2 flex flex-col gap-2 items-center justify-center ">
              <div className="flex gap-2 items-center ">
                <TiTick className=" w-5 h-5 text-white -400" />
                <p className="text-white text-xs pt-3">
                  Assess To The Gym 8.pm to 14.pm
                </p>
              </div>
              <div className="flex gap-2 items-center  ">
                <TiTick className=" w-5 h-5 text-white -400" />
                <p className="text-white text-xs pt-3">
                  Assess To The Gym 8.pm to 14.pm
                </p>
              </div>
            </div>
            <div className="px-2">
              <button className=" bg-yellow-600 hover:bg-yellow-400 rounded-full text-2x1 text px-4 py-2  text-center mt-8">
                BUY
              </button>
            </div>
          </div>

          <div className="bg-gray-800 w-full rounded-lg text-center flex flex-col relative h-60 hover:bg-gray-900">
            <span className=" font-bold text-white mt-4   ">Pass Trail </span>
            <span className=" font-bold text-white ">$ 0 </span>
            <div className="h-0.5 mt-2 bg-black"></div>
            <div className="p-2 flex flex-col gap-2 items-center justify-center ">
              <div className="flex gap-2 items-center ">
                <TiTick className=" w-5 h-5 text-white -400" />
                <p className="text-white text-xs pt-3">
                  Assess To The Gym 8.pm to 14.pm
                </p>
              </div>
              <div className="flex gap-2 items-center  ">
                <TiTick className=" w-5 h-5 text-white -400" />
                <p className="text-white text-xs pt-3">
                  Assess To The Gym 8.pm to 14.pm
                </p>
              </div>
            </div>
            <div className="px-2">
              <button className=" bg-yellow-600 hover:bg-yellow-400 rounded-full text-2x1 text px-4 py-2  text-center mt-8">
                BUY
              </button>
            </div>
          </div>

          <div className="bg-gray-800 w-full rounded-lg text-center flex flex-col relative h-60  hover:bg-gray-900">
            <span className=" font-bold text-white mt-4   ">Pass Trail </span>
            <span className=" font-bold text-white ">$ 0 </span>
            <div className="h-0.5 mt-2 bg-black"></div>
            <div className="p-2 flex flex-col gap-2 items-center justify-center ">
              <div className="flex gap-2 items-center ">
                <TiTick className=" w-5 h-5 text-white -400" />
                <p className="text-white text-xs pt-3">
                  Assess To The Gym 8.pm to 14.pm
                </p>
              </div>
              <div className="flex gap-2 items-center  ">
                <TiTick className=" w-5 h-5 text-white -400" />
                <p className="text-white text-xs pt-3">
                  Assess To The Gym 8.pm to 14.pm
                </p>
              </div>
            </div>
            <div className="px-2">
              <button className=" bg-yellow-600 hover:bg-yellow-400 rounded-full text-2x1 text px-4 py-2  text-center mt-8">
                BUY
              </button>
            </div>
          </div>
          <div className="bg-gray-800 w-full rounded-lg text-center flex flex-col relative h-60  hover:bg-gray-900">
            <span className=" font-bold text-white mt-4   ">Pass Trail </span>
            <span className=" font-bold text-white ">$ 0 </span>
            <div className="h-0.5 mt-2 bg-black"></div>
            <div className="p-2 flex flex-col gap-2 items-center justify-center ">
              <div className="flex gap-2 items-center ">
                <TiTick className=" w-5 h-5 text-white -400" />
                <p className="text-white text-xs pt-3">
                  Assess To The Gym 8.pm to 14.pm
                </p>
              </div>
              <div className="flex gap-2 items-center  ">
                <TiTick className=" w-5 h-5 text-white -400" />
                <p className="text-white text-xs pt-3">
                  Assess To The Gym 8.pm to 14.pm
                </p>
              </div>
            </div>
            <div className="px-2">
              <button className=" bg-yellow-600 hover:bg-yellow-400 rounded-full text-2x1 text px-4 py-2  text-center mt-8">
                BUY
              </button>
            </div>
          </div>
          <div className="bg-gray-800 w-full rounded-lg text-center flex flex-col relative h-60  hover:bg-gray-900">
            <span className=" font-bold text-white mt-4   ">Pass Trail </span>
            <span className=" font-bold text-white ">$ 0 </span>
            <div className="h-0.5 mt-2 bg-black"></div>
            <div className="p-2 flex flex-col gap-2 items-center justify-center ">
              <div className="flex gap-2 items-center ">
                <TiTick className=" w-5 h-5 text-white -400" />
                <p className="text-white text-xs pt-3">
                  Assess To The Gym 8.pm to 14.pm
                </p>
              </div>
              <div className="flex gap-2 items-center  ">
                <TiTick className=" w-5 h-5 text-white -400" />
                <p className="text-white text-xs pt-3">
                  Assess To The Gym 8.pm to 14.pm
                </p>
              </div>
            </div>
            <div className="px-2">
              <button className=" bg-yellow-600 hover:bg-yellow-400 rounded-full text-2x1 text px-4 py-2  text-center mt-8">
                BUY
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container lg:mb-20 ">
        <div className="grid lg:grid-cols-2 md:grid-cols-1 lg:gap-10 ">
          <div className="text-white">
            <h2 className="font-bold text-5xl mt-10">About Us</h2>
            <p className=" mt-4">
              Exercise is defined as any movement that makes your muscles work
              and requires your body to burn calories.
            </p>
            <p className=" mt-4">
              Exercise is defined as any movement that makes your muscles work
              and requires your body to burn calories.
            </p>
            <p className=" mt-4">
              Exercise is defined as any movement that makes your muscles work
              and requires your body to burn calories.
            </p>
            <p className=" mt-4">
              Exercise is defined as any movement that makes your muscles work
              and requires your body to burn calories.
            </p>
            <p className=" mt-4">
              Exercise is defined as any movement that makes your muscles work
              and requires your body to burn calories.
            </p>
          </div>

          <div className="w-full mt-10">
            <Image
              className="rounded-md"
              width={1000}
              height={1000}
              src={
                "https://img.freepik.com/premium-photo/contemporary-spotless-fitness-gym-center-interiorgenerative-ai_391052-10889.jpg"
              }
            ></Image>
          </div>
        </div>
      </div>
      <div className="container mb-">
        <div className="font-bold text-5xl text-center lg:mt-28 mt-5 text-white">
          Trainers Staff
        </div>

        <div className=" text-white grid lg:grid-cols-4 md:grid-cols-2 gap-5">
          <div className=" bg-gray-800 w-full rounded-lg text-center flex flex-col relative  lg:mt-36 mt-3">
            <div className=" p-5 rounded-lg">
              <img
                className="  rounded-xl h-[250px]"
                src={
                  "https://c4.wallpaperflare.com/wallpaper/206/268/839/pose-muscle-muscle-rod-press-hd-wallpaper-preview.jpg"
                }
              />
              <h3 className=" mt-4 font-bold">Victoria Shurpik</h3>
              <div className="flex items-center justify-center space-x-4 mt-6">
                <div>
                  <FaInstagram className=" w-10 h-10" />
                </div>

                <div>
                  <CiTwitter className=" w-10 h-10" />
                </div>

                <div>
                  <FaFacebookSquare className=" w-10 h-10" />
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-gray-800 w-full rounded-lg text-center flex flex-col relative  lg:mt-36">
            <div className=" p-5 rounded-lg">
              <img
                className="  rounded-xl h-[250px]"
                src={
                  "https://c0.wallpaperflare.com/preview/360/606/527/fitness-men-sports-gym.jpg"
                }
              />
              <h3 className=" mt-4 font-bold"> Harry Callum</h3>
              <div className="flex items-center justify-center space-x-4 mt-6">
                <div>
                  <FaInstagram className=" w-10 h-10" />
                </div>

                <div>
                  <CiTwitter className=" w-10 h-10" />
                </div>

                <div>
                  <FaFacebookSquare className=" w-10 h-10" />
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-gray-800 w-full rounded-lg text-center flex flex-col relative  lg:mt-36">
            <div className=" p-5 rounded-lg">
              <img
                className="  rounded-xl h-[250px]"
                src={
                  "https://img.freepik.com/premium-photo/male-athlete-exercising-gym-lifting-weights-pulling-joints_35752-14866.jpg"
                }
              />
              <h3 className=" mt-4 font-bold"> Jacob Jacob</h3>
              <div className="flex items-center justify-center space-x-4 mt-6">
                <div>
                  <FaInstagram className=" w-10 h-10" />
                </div>

                <div>
                  <CiTwitter className=" w-10 h-10" />
                </div>

                <div>
                  <FaFacebookSquare className=" w-10 h-10" />
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-gray-800 w-full rounded-lg text-center flex flex-col relative  lg:mt-36">
            <div className=" p-5 rounded-lg">
              <img
                className="  rounded-xl h-[250px]"
                src={
                  "https://img.freepik.com/premium-photo/lifting-barbell-young-sportive-strong-man-black-wear-have-workout-day-gym_146671-39630.jpg?w=360"
                }
              />
              <h3 className=" mt-4 font-bold"> Charlie Kyle William</h3>
              <div className="flex items-center justify-center space-x-4 mt-6">
                <div>
                  <FaInstagram className=" w-10 h-10" />
                </div>

                <div>
                  <CiTwitter className=" w-10 h-10" />
                </div>

                <div>
                  <FaFacebookSquare className=" w-10 h-10" />
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-gray-800 w-full rounded-lg text-center flex flex-col relative  lg:mt-36">
            <div className=" p-5 rounded-lg">
              <img
                className="  rounded-xl h-[250px]"
                src={
                  "https://media.istockphoto.com/id/1391410249/photo/sports-and-gym-activities.jpg?s=612x612&w=0&k=20&c=1S-hAmT-CkRtdYV_hcKi1lZdQkXAN_mCy3ebIXlUEnE="
                }
              />
              <h3 className=" mt-4 font-bold"> Thomas Joe Ethan</h3>
              <div className="flex items-center justify-center space-x-4 mt-6">
                <div>
                  <FaInstagram className=" w-10 h-10" />
                </div>

                <div>
                  <CiTwitter className=" w-10 h-10" />
                </div>

                <div>
                  <FaFacebookSquare className=" w-10 h-10" />
                </div>
              </div>
            </div>
          </div>

          <div className=" bg-gray-800 w-full rounded-lg text-center flex flex-col relative  lg:mt-36">
            <div className=" p-5 rounded-lg">
              <img
                className="  rounded-xl h-[250px]"
                src={
                  "https://st2.depositphotos.com/5311026/10616/i/450/depositphotos_106168974-Handsome-power-athletic-man-bodybuilder-Fitness-muscular-body-on-dark-smoke-background-Perfect-male-Awesome-bodybuilder-tattoo-posing.jpg"
                }
              />
              <h3 className=" mt-4 font-bold"> George Reece Michael</h3>
              <div className="flex items-center justify-center space-x-4 mt-6">
                <div>
                  <FaInstagram className=" w-10 h-10" />
                </div>

                <div>
                  <CiTwitter className=" w-10 h-10" />
                </div>

                <div>
                  <FaFacebookSquare className=" w-10 h-10" />
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-gray-800 w-full rounded-lg text-center flex flex-col relative  lg:mt-36">
            <div className=" p-5 rounded-lg">
              <img
                className="  rounded-xl h-[250px]"
                src={
                  "https://img.mensxp.com/media/content/2022/Jan/Skin-Problems-Most-Gym-Goers-Struggle-With1200_61e3f806a994c.jpeg"
                }
              />
              <h3 className=" mt-4 font-bold"> Oscar Rhys Alexander</h3>
              <div className="flex items-center justify-center space-x-4 mt-6">
                <div>
                  <FaInstagram className=" w-10 h-10" />
                </div>

                <div>
                  <CiTwitter className=" w-10 h-10" />
                </div>

                <div>
                  <FaFacebookSquare className=" w-10 h-10" />
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-gray-800 w-full rounded-lg text-center flex flex-col relative  lg:mt-36">
            <div className=" p-5 rounded-lg">
              <img
                className="  rounded-xl h-[250px]"
                src={
                  "https://images7.alphacoders.com/130/thumb-1920-1308025.jpg"
                }
              />
              <h3 className=" mt-4 font-bold"> James Charlie James</h3>
              <div className="flex items-center justify-center space-x-4 mt-6">
                <div>
                  <FaInstagram className=" w-10 h-10" />
                </div>

                <div>
                  <CiTwitter className=" w-10 h-10" />
                </div>

                <div>
                  <FaFacebookSquare className=" w-10 h-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container ">
        <div className="">
          <div className=" text-white w-full">
            <Image
              className=" w-[140px] lg:mt-60 mt-5 "
              alt="ROOT"
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSINbAXc6bPKWGBczZAULJZPD8zMaB6A6phtqe1gLfxbkpM_dfqorSDL25vd9_Z9vxUbLQ&usqp=CAU"
              }
              width={1000}
              height={1000}
            />
          </div>
          <div className="lg:flex-row flex-col flex justify-between text-white w-full ">
            <div>
              <p className=" text-sm lg:w-96 w-full mt-3">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content. Lorem ipsum
                may be used as a placeholder before the final copy is available.
              </p>
            </div>
            <div>
              <h2 className=" font-bold  text-3xl">Address</h2>
              <div>
                <p className=" text-sm mt-3">Republic of resource</p>
                <p className=" text-sm  ">Pakistan city</p>
                <p className=" text-sm ">GYM Benifits</p>
              </div>
            </div>

            <div>
              <h2 className=" font-bold text-3xl">Contact</h2>
              <div>
                <p className=" text-sm mt-3 flex ">03142525134</p>
                <p className=" text-sm  ">Ahmed@gmail.com</p>
              </div>
              <div className="flex  space-x-4 mt-3 text-white">
                <div>
                  <FaInstagram className=" w-10 h-10" />
                </div>

                <div>
                  <CiTwitter className=" w-10 h-10" />
                </div>

                <div>
                  <FaFacebookSquare className=" w-10 h-10" />
                </div>
                <div>
                  <FaYoutube className=" w-10 h-10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
