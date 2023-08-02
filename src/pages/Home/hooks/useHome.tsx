import { useCallback, useState, useEffect } from "react";
import { getUsers } from "../../../api/getUsers";

export const useHome = () => {
  const [search, setSearch] = useState<string>("");
  const [users, setUsers] = useState([]);
  const [sortValue, setSortValue] = useState<string>("desc");
  const [page, setPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(0);
  const [sortActive, setSortActive] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    async function fetchUsers() {
      if (search) {
        try {
          const result = await getUsers.get(
            `/users?q=${search}&per_page=10&page=${page}&sort=followers&order=${sortValue}`,
          );
          setUsers(result.data.items);
          console.log(search);
          setPageCount(Math.ceil(result.data.total_count / 30));
          setErrorMsg("");
        } catch (e: any) {
          setErrorMsg(e.message);
        }
      }
    }
    fetchUsers();
  }, [search, page, sortValue, errorMsg]);
  const changeSearch = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(target.value);
  };
  const sortChange = useCallback(() => {
    setSortActive(!sortActive);
    if (sortValue === "desc") {
      setSortValue("asc");
    } else {
      setSortValue("desc");
    }
  }, [sortActive]);

  return {
    search,
    users,
    sortValue,
    page,
    pageCount,
    sortActive,
    errorMsg,
    sortChange,
    setSearch,
    setUsers,
    setSortValue,
    setPage,
    setPageCount,
    changeSearch,
  };
};
