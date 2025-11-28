import { Check, Truck, X } from "lucide-react";

export default function Home() {
  const steps = [
    {
      title: "Label Created",
      location: "Reading, UK",
      date: "2025-11-20",
      isCompleted: true,
    },
    {
      title: "Package Handed to Courier",
      location: "Reading, UK",
      date: "2025-11-26",
      isCompleted: true,
    },
    {
      title: "Package Arrived at Sorting Center",
      location: "London, UK",
      date: "2025-11-27",
      isCompleted: true,
    },
    {
      title: "Package Loaded onto Aircraft",
      location: "London, UK",
      date: "2025-11-28",
      isCompleted: true,
    },
    {
      title: "Package Arrived at Destination Country",
      location: "Budapest, HU",
      date: "2025-11-28",
      isCompleted: true,
    },
    {
      title: "Package Arrived at Local Distribution Center",
      location: "Budapest, HU",
      date: "2025-11-28",
      isCompleted: true,
    },
    {
      title: "Failed Delivery Attempt",
      location: "Budapest, HU",
      date: "2025-11-28",
      isCompleted: false,
    },
  ];

  return (
    <div className="flex justify-center w-full">
      <div className="w-full flex flex-col items-center max-w-md">
        <div className="size-14 rounded-md text-primary-foreground bg-primary flex items-center justify-center">
          <Truck />
        </div>
        <p className="text-3xl mt-1 font-semibold mb-2">Awaiting Delivery</p>
        <p className="mb-6 text-sm text-center">
          Expected Delivery <br />
          <span className="font-semibold">2025-11-29 to 2025-11-30</span>
        </p>
        <div className="flex justify-between items-start mb-6 border border-primary/20 text-primary p-3 bg-primary/10 w-full rounded-md">
          <p className="">Tracking Number</p>
          <p className="font-semibold">LAU26202511</p>
        </div>
        <div className="divide-y">
          {steps.map((step) => (
            <div key={step.title} className="p-2 gap-x-4 flex items-center">
              <div className="size-10 bg-primary/10 aspect-square shrink-0 border border-primary/20 rounded-full flex items-center justify-center text-primary/60">
                {step.isCompleted ? (
                  <Check className="size-5" />
                ) : (
                  <X className="size-5" />
                )}
              </div>
              <div className="">
                <p className="font-semibold text-lg">{step.title}</p>
                <p className="">
                  {step.location}, {step.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
