import React from "react";
import Link from "next/link";
type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <Link href="/about" style={{ fontSize: 40, fontWeight: "bold" }}>
        Link to about
      </Link>
    </div>
  );
};

export default Home;
