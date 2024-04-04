const fetchData = async (
  { pageParam = 1 }: { pageParam: number },
  { pageOrder = "" }: { pageOrder: string },
  { sortPage = "" }: { sortPage: string },
  { pageSize = 15 }: { pageSize: number }
) => {
  try {
    const res = await fetch(
      `https://api.stackexchange.com/2.3/tags?page=${pageParam}&pagesize=${pageSize}&order=${pageOrder}&sort=${sortPage}&site=stackoverflow`
    );

    if (!res.ok) {
      throw new Error("No response from fetch");
    }

    const data = await res.json();

    return data;
  } catch (error) {
    console.error("Could not fetch tags ", error);
  }
};

export default fetchData;
