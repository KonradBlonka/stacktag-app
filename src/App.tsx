import fetchData from "@/api/api_functions";
import { Item } from "@/types/interface";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import CardTag from "./components/CardTag";
import { Button } from "./components/ui/button";
// import { Input } from './components/ui/input';
import {
  AlertCircle,
  GalleryVertical,
  MoveDown,
  MoveUp,
  TableProperties,
} from "lucide-react";
import ListTag from "./components/ListTag";
import TableListTag from "./components/TableListTag";
import { Alert, AlertTitle } from "./components/ui/alert";
import { Input } from "./components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "./components/ui/toggle-group";

function App() {
  // const [tags, setTags] = useState<Item[]>([]);
  const [page, setPage] = useState(1);
  const [order, setOrder] = useState("asc");
  const [sort, setSort] = useState("name");
  const [size, setSize] = useState(9);
  const [sizeInput, setSizeInput] = useState("");
  const [inputError, setInputError] = useState(false);
  const [contentChoose, setContentChoose] = useState(false);

  const { data, isPending, error, isError, isPlaceholderData } = useQuery({
    queryKey: ["Tags", page, order, sort, size],
    queryFn: () =>
      fetchData(
        { pageParam: page },
        { pageOrder: order },
        { sortPage: sort },
        { pageSize: size }
      ),
    enabled: true,
    // the data from last fetch is shown while new data is still in progress
    placeholderData: keepPreviousData,
  });

  // object in API when false, then current page is last page
  const moreData = data?.has_more;

  // Page number Start
  const previousPage = () => {
    setPage(Math.max(page - 1, 1)); // Ensures page doesn't go below 1
  };
  const nextPage = () => {
    if (moreData === true && !isPlaceholderData) {
      setPage(page + 1);
    }

    if (moreData === false) {
      console.log("It's a last page");
    }
  };
  // Page number END

  // when sorting pages then move to page 1
  // Page order Start
  const ascOrder = () => {
    setOrder("asc");
    setPage(1);
  };

  const descOrder = () => {
    setOrder("desc");
    setPage(1);
  };
  // Page order END

  // Page sort Start
  const nameSort = () => {
    setSort("name");
    setPage(1);
  };
  const popularSort = () => {
    setSort("popular");
    setPage(1);
  };
  const activitySort = () => {
    setSort("activity");
    setPage(1);
  };
  // Page sort END

  const inputErrorCheck = (value: number) => {
    const num = value;
    if (isNaN(num) || num <= 0 || num > 100) {
      // setting error for disabling button
      setInputError(true);
      return false;
    } else {
      setInputError(false);
      return true;
    }
  };

  // call Card stlyling page
  const pageContent = (data?.items as Item[])?.map((tag) => {
    return <CardTag key={tag.name} item={tag} />;
  });

  const ListContent = (data?.items as Item[])?.map((tag) => {
    return <ListTag key={tag.name} item={tag} />;
  });

  // const ListContent = () => {
  //   return (
  //     <Table className="bg-white">
  //       <TableHeader>
  //         <TableRow>
  //           <TableHead>Name</TableHead>
  //           <TableHead>Count</TableHead>
  //         </TableRow>
  //       </TableHeader>
  //       <TableBody>
  //         {(data?.items as Item[])?.map((tag) => (
  //           <TableRow key={tag.name}>
  //             <TableCell>{tag.name}</TableCell>
  //             <TableCell>{tag.count}</TableCell>
  //           </TableRow>
  //         ))}
  //       </TableBody>
  //     </Table>
  //   );
  // };

  return (
    <>
      <div className=" flex flex-col items-center ">
        <div className="w-[60%] flex justify-between bg-black p-2">
          <div>
            <ToggleGroup
              type="single"
              className="bg-black p-2 data-[state=on]:text-black text-white rounded-md"
              defaultValue="name"
            >
              <ToggleGroupItem
                value="name"
                className="border-white border-2"
                disabled={sort === "name" || isPlaceholderData}
                onClick={nameSort}
              >
                Name
              </ToggleGroupItem>

              <ToggleGroupItem
                value="popular"
                className="border-white border-2"
                disabled={sort === "popular" || isPlaceholderData}
                onClick={popularSort}
              >
                Popular
              </ToggleGroupItem>
              {/* aria-label="Toggle " */}
              <ToggleGroupItem
                value="new"
                className="border-white border-2"
                disabled={sort === "activity" || isPlaceholderData}
                onClick={activitySort}
              >
                New
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div>
            <ToggleGroup
              type="single"
              className="bg-black p-2 data-[state=on]:text-black text-white rounded-md"
              defaultValue="false"
            >
              <ToggleGroupItem
                value="pageContent"
                className="border-white border-2"
                disabled={contentChoose === false || isPlaceholderData}
                onClick={() => setContentChoose(false)}
              >
                <div className="w-15 flex justify-center align-middle items-center">
                  List
                  <TableProperties className="ml-3" size={15} strokeWidth={3} />
                </div>
              </ToggleGroupItem>
              <ToggleGroupItem
                value="listContent"
                className="border-white border-2"
                disabled={contentChoose === true || isPlaceholderData}
                onClick={() => setContentChoose(true)}
              >
                <div className="w-15 flex justify-center align-middle items-center">
                  Cards
                  <GalleryVertical className="ml-1" size={15} strokeWidth={3} />
                </div>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
          <div>
            <ToggleGroup
              type="single"
              className="bg-black p-2 data-[state=on]:text-black text-white rounded-md"
              defaultValue="asc"
            >
              <ToggleGroupItem
                value="asc"
                className="border-white border-2"
                disabled={order === "asc" || isPlaceholderData}
                onClick={ascOrder}
              >
                <div className="w-15 flex justify-center align-middle items-center">
                  ASC
                  <MoveUp className="ml-3" size={15} strokeWidth={3} />
                </div>
              </ToggleGroupItem>
              <ToggleGroupItem
                value="desc"
                className="border-white border-2"
                disabled={order === "desc" || isPlaceholderData}
                onClick={descOrder}
              >
                <div className="w-15 flex justify-center align-middle items-center">
                  DESC
                  <MoveDown className="ml-1" size={15} strokeWidth={3} />
                </div>
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
        <div className="w-[60%] p-4 bg-black flex justify-between items-center">
          <div>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input
                type="number"
                value={sizeInput}
                placeholder="Set page size"
                name="sizeInput"
                className="remove-arrow"
                onChange={(e) => {
                  setSizeInput(e.target.value);
                  inputErrorCheck(parseInt(e.target.value));
                }}
              />
              <Button
                className="bg-black text-white border-white border-2 hover:text-black"
                variant={"secondary"}
                type="submit"
                onClick={() => {
                  const parsedSizeInput = parseInt(sizeInput);
                  // if sizeInput !number is for undefined problem when clicking button after
                  // reloading page (there is no number in input card after click it was undefined)
                  // sizeInput is string
                  if (
                    !isNaN(parsedSizeInput) &&
                    inputErrorCheck(parsedSizeInput)
                  ) {
                    setSize(parsedSizeInput);
                  } else {
                    // input error true when undefined && !inputErrorCheck
                    setInputError(true);
                  }
                }}
                disabled={isPlaceholderData || inputError === true}
              >
                Change Size
              </Button>
            </div>
            <div>
              {
                // show error when there is incorrect number
                inputError && (
                  <Alert variant="destructive" className="mt-2">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>
                      Page size must be a number between 1 and 100
                    </AlertTitle>
                  </Alert>
                )
              }
            </div>
          </div>
          <div>
            <Button
              variant={"link"}
              className="bg-black text-white border-white border-2"
              onClick={previousPage}
              disabled={page === 1 || isPlaceholderData}
            >
              Previous
            </Button>
            <Button
              variant={"link"}
              className="bg-black text-white ml-2 border-white border-2"
              onClick={nextPage}
              disabled={moreData === false || isPlaceholderData}
            >
              Next
            </Button>
          </div>
        </div>

        {isPending ? (
          <div className="text-white">Loading...</div>
        ) : isError ? (
          <div className="text-white">Error: {error?.message}</div>
        ) : (
          <div className="w-[60%]">
            {contentChoose ? (
              <div className="grid grid-cols-3 gap-3 p-5">{pageContent}</div>
            ) : (
              <TableListTag>{ListContent}</TableListTag>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
