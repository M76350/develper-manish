import { ReactNode } from "react";

const Section = ({ id, children }: { id?: string; children: ReactNode }) => (
  <section id={id} className="container mx-auto mt-24">
    {children}
  </section>
);

export default Section;
