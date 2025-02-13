import React from "react";
import Navbar from "~/component/navbar";

export function LandingPage() {
  return (
    <>
      <Navbar />
      <section className='container mx-auto min-h-lvh'>
        <h1 className='text-3xl font-semibold text-center mt-10'>
          Welcome to the React Router Template
        </h1>
        <p className='text-center mt-4'>
          This template is a starting point for building React applications with
          React Router.
        </p>
      </section>
    </>
  );
}
