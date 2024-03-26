import AboutImg from "@/components/aboutImg";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IoMdTimer } from "react-icons/io";
import { BsAlexa } from "react-icons/bs";
import { GrTechnology } from "react-icons/gr";
import NewAboutBox from "@/components/NewAboutBox";

export default function About() {
  return (
    <main>
      <div className="pt-10">
        <AboutImg />
        <div className="py-10 px-20">
          <div className="my-6">
            <h1 className="text-l font-bold text-sky-600">OUR STORY</h1>
          </div>
          <div>
            <h1 className="font-bold text-3xl text-sky-900 mb-2">
              Networking Company
            </h1>
            <p>
              Established in the year 2003, Sastra concentrates on providing
              state-of-art technology solutions in system integration, network
              architecture, integrated cross-platform client-server
              infrastructure design and implementation, supporting and
              maintaining a wide variety of networking services with an emphasis
              on standards compliance and optimization.
            </p>
          </div>
          <div className="mt-10 mb-2">
            <h1 className="text-l font-bold text-sky-600 mb-0">OUR MISSION</h1>
          </div>
          <div>
            <p className="mt-0">
              Sastra’s mission is to be the paramount in ICT service and
              solution provider, with concrete emphasis on ascertaining,
              qualifying and providing technology solutions that offer enduring
              business significance to our clients.
            </p>
          </div>
        </div>

        <div className="shadow-lg py-2">
          <div className="flex flex-col  mx-auto">
            <div className="flex flex-col">
              <div className="flex flex-wrap flex-row gap-8 mx-auto">
                <NewAboutBox desc="Years of experience" limit={21} />
                <NewAboutBox desc="Satisfied Clients" limit={500} />
                <NewAboutBox desc="Valued Partner" limit={12} />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div
            className="my-20 flex flex-col  "
            style={{
              backgroundImage:
                "url('https://billionbeesfx.com/wp-content/uploads/2023/08/who-we-are-vector.png ')",
              backgroundSize: "cover", // Cover the entire div
              backgroundPosition: "center", // Center the background image
            }}
          >
            <h1 className="text-sky-900 text-xl font-bold mb-2 flex justify-center">
              OUR EXPERTISE
            </h1>
            <h2 className="text-sky-600 text-3xl font-bold flex justify-center">
              Why Choose Us
            </h2>

            <div className="flex justify-center gap-8 ">
              <div className="h-90x w-[28%] border-b-4 border-sky-600 py-4 px-16 shadow-lg hover:shadow-2xl my-2 transition-all ease-in-out bg-white rounded-md">
                <div className="h-16 ">
                  <GrTechnology
                    size={60}
                    className="size={120} hover:scale-125 transition-all ease-in-out hover:cursor-pointer duration-200"
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-semibold text-sky-600 my-2">
                    Experties
                  </h1>
                  <p className="text-sm">
                    With a team of highly skilled and prowess individuals,
                    Sastra has flawlessly executed many ambitious projects. With
                    required skills in our arsenal we can help you sail through
                    uncertain future more smoothly.
                  </p>
                </div>
              </div>

              <div className="h-90x w-[28%] border-b-4 border-sky-600 py-4 px-16 shadow-lg hover:shadow-2xl my-2 transition-all ease-in-out bg-white rounded-md">
                <div className="h-16 ">
                  <VscWorkspaceTrusted
                    size={60}
                    className="size={120} hover:scale-125 transition-all ease-in-out hover:cursor-pointer duration-200"
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-semibold text-sky-600 my-2">
                    Reliablity
                  </h1>
                  <p className="text-sm">
                    During its extensive market presence, Sastra has been a
                    reliable partner and service provider to many well known
                    organization and entities. We respect the trust devoted by
                    our customer and partners and strive to give optimum output.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-8">
              <div className="h-90x w-[28%] border-b-4 border-sky-600 py-4 px-16 shadow-lg hover:shadow-2xl my-2 transition-all ease-in-out bg-white rounded-md">
                <div className="h-16 ">
                  <IoMdTimer
                    size={60}
                    className="size={120} hover:scale-125 transition-all ease-in-out hover:cursor-pointer duration-200"
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-semibold text-sky-600 my-2">
                    Punctual
                  </h1>
                  <p className="text-sm">
                    We respect our customer’s precious time and also understand
                    that time accompanies a cost, so we mobilize ourselves with
                    a intention to always keep you in surplus.
                  </p>
                </div>
              </div>

              <div className="h-90x w-[28%] border-b-4 border-sky-600 py-4 px-16 shadow-lg hover:shadow-2xl my-2 transition-all ease-in-out bg-white rounded-md">
                <div className="h-16 ">
                  <BsAlexa
                    size={60}
                    className="size={120} hover:scale-125 transition-all ease-in-out hover:cursor-pointer duration-200"
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-semibold text-sky-600 my-2">
                    Relevance
                  </h1>
                  <p className="text-sm">
                    In this uncertain and ever changing world, we believe that
                    our team should be well aware about the present market
                    condition and give our customer relevant solution which will
                    save them energy, money and time.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
