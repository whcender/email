

const getData = async () => {
  try {
      const res = await fetch(`https://email-eight-bice.vercel.app/api/email`, {
          cache: "no-store",
      });

      if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const result = await res.json();

      return result;
  } catch (error) {
      console.error("Error fetching data:", error);
      return [];
  }
};


export default async function Home() {

  const data = await getData();
  return (
    <div className="bg-black text-white">
      <h1>User Mails</h1>
        {data.map((email :any) => (
          <div key={email.id}>
            <h2>{email.email}</h2>
          </div>
        ))}
    </div>
  );
}
