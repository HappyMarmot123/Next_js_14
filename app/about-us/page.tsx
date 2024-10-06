import { useState } from "react";

export async function metadata() {
  return { title: "You can change title dynamicly" };
}

export default function hello() {
  return <h1>Hello</h1>;
}
