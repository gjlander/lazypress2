import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
const IndexLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <Navbar />
      <main className="flex flex-grow flex-col font-mom-cake">{children}</main>
      <Footer />
    </>
  );
};

export default IndexLayout;
