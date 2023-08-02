import { Card } from "../../components/Card";
import { Search } from "../../components/Search";

import { User } from "../../components/User";
import { Pagination } from "@mui/material";
import { Header } from "../../components/Header";
import { useHome } from "./hooks/useHome";
import { Button } from "../../components/Button";
import { SSearchWrapper } from "./styles";

export const Home = () => {
  const {
    search,
    users,
    page,
    pageCount,
    sortActive,
    errorMsg,
    sortChange,
    setPage,
    changeSearch,
  } = useHome();
  return (
    <>
      <Header />
      <Card>
        <SSearchWrapper>
          <Search handleChange={changeSearch} search={search} />
          <Button sortChange={sortChange} sortActive={sortActive} />
        </SSearchWrapper>
        {!errorMsg
          ? users.map(({ avatar_url, login, id }) => (
              <User key={id} login={login} avatar={avatar_url} id={id} />
            ))
          : errorMsg}
        {users.length > 0 && (
          <Pagination
            count={pageCount}
            page={page}
            onChange={(_, num) => {
              setPage(num);
            }}
          />
        )}
      </Card>
    </>
  );
};
