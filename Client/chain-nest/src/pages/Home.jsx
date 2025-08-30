import { Select } from "../assets";
import {
  FaArrowTrendUp,
  FaRegCalendarCheck,
  FaUserGroup,
} from "react-icons/fa6";
import { LuWallet } from "react-icons/lu";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { BsShieldCheck } from "react-icons/bs";

const Home = () => {
  const stepList = [
    {
      id: 1,
      title: "Intuitive Group Creation",
      description:
        "Easily set up new saving groups, define specific goals, and invite members with personalized roles and permissions.",
      icon: (
        <FaUserGroup className="size-6 md:size-7 lg:size-9 text-blue-700" />
      ),
    },
    {
      id: 2,
      title: "Multi-Signature Wallet Security",
      description:
        "Contributions are held in a secure multi-signature wallet, requiring multiple approvals for any transaction, ensuring fund safety.",
      icon: <LuWallet className="size-6 md:size-7 lg:size-9 text-blue-700" />,
    },
    {
      id: 3,
      title: "Automated Contribution Schedules",
      description:
        "Define flexible contribution schedules (weekly, monthly, custom) with automated reminders to keep everyone on track.",
      icon: (
        <FaRegCalendarCheck className="size-6 md:size-7 lg:size-9 text-blue-700" />
      ),
    },
    {
      id: 4,
      title: "Transparent Tracking & Reporting",
      description:
        "Monitor all contributions, balances, and distributions in real-time through a clear, auditable transaction history.",
      icon: (
        <MdOutlineNotificationsActive className="size-6 md:size-7 lg:size-9 text-blue-700" />
      ),
    },
    {
      id: 5,
      title: "Flexible Distribution Modes",
      description:
        "Choose between equal share distribution for all members or rotating disbursements for specific objectives and fairness.",
      icon: (
        <FaArrowTrendUp className="size-6 md:size-7 lg:size-9 text-blue-700" />
      ),
    },
    {
      id: 6,
      title: "Enhanced Privacy & Control",
      description:
        "Maintain control over your data with robust encryption and privacy features, ensuring your financial plans remain secure.",
      icon: (
        <BsShieldCheck className="size-6 md:size-7 lg:size-9 text-blue-700" />
      ),
    },
  ];
  const whyList = [
    {
      id: 1,
      title: "Unrivaled Security",
      description:
        "Leverage blockchain-backed multi-signature wallets for superior asset protection against unauthorized access.",
      icon: (
        <FaUserGroup className="size-6 md:size-7 lg:size-9 text-blue-700" />
      ),
    },
    {
      id: 2,
      title: "Complete Transparency",
      description:
        "Every transaction is recorded on an immutable ledger, providing full transparency and auditability for all members.",
      icon: <LuWallet className="size-6 md:size-7 lg:size-9 text-blue-700" />,
    },
    {
      id: 3,
      title: "Automated & Efficient",
      description:
        "Set it and forget it. Automated contributions and reminders reduce manual effort and ensure consistent progress.",
      icon: (
        <FaRegCalendarCheck className="size-6 md:size-7 lg:size-9 text-blue-700" />
      ),
    },
    {
      id: 4,
      title: "Simple & Intuitive",
      description:
        "Designed for ease of use, our platform ensures that managing group finances is straightforward, even for beginners.",
      icon: (
        <MdOutlineNotificationsActive className="size-6 md:size-7 lg:size-9 text-blue-700" />
      ),
    },
    {
      id: 5,
      title: "Fair & Flexible",
      description:
        "Adaptable distribution options and clear contribution tracking ensure fairness and accommodate diverse group needs.",
      icon: (
        <FaArrowTrendUp className="size-6 md:size-7 lg:size-9 text-blue-700" />
      ),
    },
    {
      id: 6,
      title: "Built for Any Group",
      description:
        "Whether for personal goals, family finances, or organizational funds, Chain Nest adapts to your collective saving journey.",
      icon: (
        <BsShieldCheck className="size-6 md:size-7 lg:size-9 text-blue-700" />
      ),
    },
  ];

  const howItWorks = [
    {
      id: 1,
      title: "Create Your Group & Define Goal",
      description:
        "Start by naming your saving group and clearly outlining your collective financial objective. Invite members with ease.",
    },
    {
      id: 2,
      title: "Set Contribution Schedule",
      description:
        "Determine the amount and frequency of contributions. Our system handles automated reminders for all members.",
    },
    {
      id: 3,
      title: "Secure Funds in Multi-Sig Wallet",
      description:
        "All contributions are secured in a multi-signature wallet, requiring pre-defined approvals for access.",
    },
    {
      id: 4,
      title: "Track Progress in Real-Time",
      description:
        "Monitor your group's saving progress, individual contributions, and overall balance through intuitive dashboards.",
    },
    {
      id: 5,
      title: "Approve & Distribute Funds",
      description:
        "When your goal is reached, initiate distribution with required multi-sig approvals and select your preferred method.",
    },

    {
      id: 6,
      title: "Achieve Collective Financial Success",
      description:
        "Celebrate reaching your shared goals and enjoy the benefits of transparent and secure group saving.",
    },
  ];

  return (
    <div className="w-full pt-16">
      <div className="w-[96%] md:w-[95%] mx-auto ">
        <div className="w-full pt-4 md:pt-6 flex items-start gap-y-10 md:gap-y-0 flex-col md:flex-row">
          <div className="text-black w-full md:w-[60%]">
            <h1 className="text-blue-700 text-3xl md:text-4xl lg:text-5xl font-bold capitalize leading-8 md:leading-16">
              Secure Your Financial <br /> Future, Together.
            </h1>
            <p className="text-xl md:text-2xl z-10 my-3 md:my-6">
              Chain Nest empowers groups to achieve shared financial goals with
              robust multi-signature wallet security and automated, transparent
              contribution management.
            </p>
            <div className="text-black pt-2 md:pt-5 flex items-center justify-center md:justify-normal gap-x-8">
              <button className="bg-blue-700 text-white px-5 hover:bg-blue-600 py-1.5 md:py-2 rounded-md  transition-all ease-in-out duration-300 text-base md:text-lg cursor-pointer">
                Get started
              </button>
              <button className="border border-blue-600 px-3 py-1.5 md:py-2 rounded-md  transition-all ease-in-out duration-300 text-base md:text-lg cursor-pointer ">
                Learn More
              </button>
            </div>
          </div>
          <div className="w-full md:w-[40%] ">
            <img src={Select} alt="icon" className="w-[100%] h-[100%]" />
          </div>
        </div>
      </div>
      <section className="w-full mt-10 bg-[#fafafa] text-black py-6">
        <div className="w-[96%] md:w-[95%] mx-auto ">
          <h2 className="text-center text-2xl lg:text-3xl font-semibold text-blue-800">
            Empower Your Financial Goals with Group Savings
          </h2>
          <p className="text-center mt-4 text-sm md:text-base lg:text-lg">
            Chain Nest's Group Savings feature is designed for families,
            friends, <br /> or organizations to pool resources securely and
            transparently for shared objectives like investments, <br /> travel,
            or collective projects.
          </p>
          <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stepList.map((item) => (
              <div
                className="w-[95%] mx-auto md:w-full rounded-lg bg-white shadow"
                key={item.id}
              >
                <div className="w-[90%] mx-auto py-5">
                  <div className="">{item.icon}</div>
                  <h3 className="text-base md:text-lg mt-3 font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs md:text-sm lg:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full mt-10  text-black py-6">
        <div className="w-[96%] md:w-[95%] mx-auto ">
          <h2 className="text-center text-2xl lg:text-3xl font-semibold text-blue-800">
            How Chain Nest Group Savings Works
          </h2>
          <p className="text-center mt-4 text-sm md:text-base lg:text-lg">
            Our streamlined process makes setting up and managing group finances
            simple and secure, from creation to distribution.
          </p>
          <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {howItWorks.map((item, index) => (
              <div
                className="w-[95%] mx-auto md:w-full rounded-lg bg-white border border-blue-800 shadow"
                key={item.id}
              >
                <div className="w-[90%] mx-auto py-5">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full w-8 h-8 bg-blue-800 text-white flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <h3 className="text-base md:text-lg  font-semibold">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-xs md:text-sm lg:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full mt-10 bg-[#fafafa] text-black py-6">
        <div className="w-[96%] md:w-[95%] mx-auto ">
          <h2 className="text-center text-2xl lg:text-3xl font-semibold text-blue-800">
            Why Choose Chain Nest for Group Savings?
          </h2>
          <p className="text-center mt-4 text-sm md:text-base lg:text-lg">
            Experience unparalleled security, transparency, and collaboration
            features designed to simplify collective financial management.
          </p>
          <div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyList.map((item) => (
              <div
                className="w-[95%] mx-auto md:w-full rounded-lg bg-white shadow"
                key={item.id}
              >
                <div className="w-[90%] mx-auto py-5">
                  <div className="">{item.icon}</div>
                  <h3 className="text-base md:text-lg mt-3 font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs md:text-sm lg:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-blue-700 mt-10 py-7 w-full flex flex-col items-center justify-center">
        <div className="w-[96%] md:w-[95%] mx-auto ">
          <h3 className="text-lg text-center text-white md:text-xl lg:text-2xl font-semibold">
            Ready to Build Your Collective Future?
          </h3>
          <p className="my-4 text-center text-white text-sm md:text-base">
            Join Chain Nest today and transform the way you save and achieve
            financial milestones with your group.
          </p>
          <div className="mt-8 w-full flex items-center justify-center">
            <input
              type="text"
              className="bg-white text-black placeholder:text-black w-[80%] md:w-[60%] lg:w-[35%] m-auto px-3 h-8 md:h-10 rounded-2xl placeholder:text-center"
              placeholder="Get started with group saving"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
