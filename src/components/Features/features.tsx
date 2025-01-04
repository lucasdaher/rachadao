import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { features } from "./data/featuresData";

export function Features() {
  return (
    <section className="bg-black-900 w-full p-14">
      <div className="container max-w-[1440px] w-full mx-auto px-4">
        <h2 className="text-white text-4xl font-bold text-center mb-12 tracking-tight leading-none">
          Conheça nossas funcionalidades
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-black-800 hover:bg-green-950 backdrop-blur-xl border-[0.5px] border-gray-border border-opacity-50 transition-all duration-200 ease-in-out hover:scale-105"
            >
              <CardHeader>
                <feature.icon className="h-12 w-12 text-primary mb-4 text-white rounded-md p-2 bg-gradient-to-tr from-green-500 to-green-800" />
                <CardTitle className="text-white">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white text-opacity-60">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
