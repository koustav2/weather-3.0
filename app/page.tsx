"use client";


import CityPicker from "@/components/CityPicker";
import { Card, Text, Divider, Subtitle, } from "@tremor/react";


export default function Home() {
  return (
    <div className=" min-h-screen bg-gradient-to-br from-[#394F68] to-[#183B7E]
      p-10  flex flex-col justify-center items-center 
    ">
      <Card className="max-w-4xl mx-auto">
        <Text className="text-4xl md:text-6xl font-bold text-center mb-10">Weather 3.0</Text>
        <Subtitle className="text-xl text-center">
          Powered by Next.js, Tailwind, Tremor 2.0, StepZen and more.
        </Subtitle>

        <Divider className="my-10"/>

        <Card className="bg-gradient-to-br from-[#394F68] to-[#183B7E]">
          {/* City  */}
          <CityPicker/>
        </Card>
      </Card>
    </div>
  )
}
