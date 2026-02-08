import { cn } from "@/lib/utils";
import {
  Users,
  Lightbulb,
  Rocket,
  Brain,
  Code,
  Network,
  TestTube,
  Trophy,
} from "lucide-react"

const features = [
  {
    title: "Community & Connection",
    description:
      "We bring together QA professionals, engineering leaders, and innovators to share knowledge, build networks, and support one another in advancing the discipline of quality.",
    icon: <Users />,
  },
  {
    title: "Learning & Growth",
    description:
      "Through conferences, workshops, and meetups, we provide hands-on learning opportunities focused on modern testing practices, AI in QA, and practical strategies to elevate your skills and career.",
    icon: <Lightbulb />,
  },
  {
    title: "Shaping the Future of Quality",
    description:
      "We help teams and leaders embrace transformation—integrating AI, automation, and lean testing approaches to build high-confidence release pipelines.",
    icon: <Rocket />,
  },
  {
    title: "AI-Powered Testing",
    description:
      "Discover how artificial intelligence is revolutionizing test automation, defect prediction, and quality analytics to accelerate your delivery pipeline.",
    icon: <Brain />,
  },
  {
    title: "Engineering Excellence",
    description:
      "Learn from practitioners who build quality into every stage of the development process, from code reviews to production monitoring.",
    icon: <Code />,
  },
  {
    title: "Industry Networking",
    description:
      "Connect with peers from leading tech companies, share experiences, and build relationships that advance your career.",
    icon: <Network />,
  },
  {
    title: "Hands-On Workshops",
    description:
      "Participate in practical sessions where you'll learn new tools, techniques, and frameworks you can apply immediately.",
    icon: <TestTube />,
  },
  {
    title: "Career Advancement",
    description:
      "Gain insights from industry leaders on how to grow your career, lead teams, and make an impact in quality engineering.",
    icon: <Trophy />,
  },
];

export function FeaturesSectionWithHoverEffects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 w-full">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-border",
        (index === 0 || index === 4) && "lg:border-l border-border",
        index < 4 && "lg:border-b border-border"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-primary">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-muted group-hover/feature:bg-primary transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-foreground">
          {title}
        </span>
      </div>
      <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
