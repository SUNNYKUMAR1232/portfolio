"use client";
import About from "@/components/AboutSection/About";
import Experience from "@/components/Experience/Experience";
import Hero from "@/components/HeroSection/Hero";
import NavBar from "@/components/navBar/NavBar";
import GetTouch from "@/components/GetTouch/GetTouch";
import Project from "@/components/Project/Project";
import Education from "@/components/Education/Education";
import Footer from "@/components/Footer/Footer";
import Skill from "@/components/Skills/Skill";
import { Box } from "@mui/material";
import Imagekit from "@/features/imagekit";
export default function Home() {
  return (
    <main>
      <Box>
        <NavBar />
      </Box>
      <Hero />
    </main>
  );
}
