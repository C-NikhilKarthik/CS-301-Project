import { useState } from "react";

function TabSystem() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      label: "Tab 1",
      content: <h1>hello</h1>,
    },
    {
      label: "Tab 2",
      content: "This is the content of Tab 2.",
    },
  ];

  return (
    <div className="max-w-md mx-auto mt-8">
      <div className="border-b border-gray-200">
        <div className="flex justify-between -mb-px">
          {tabs.map((tab, index) => (
            <button
              key={tab.label}
              className={`${
                activeTab === index
                  ? "border-b-2 border-blue-500"
                  : "border-b border-transparent"
              } px-4 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700`}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <p className="text-gray-500">{tabs[activeTab].content}</p>
      </div>
    </div>
  );
}

export default TabSystem;
