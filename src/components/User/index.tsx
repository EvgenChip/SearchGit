import { FC, useState } from "react";
import Avatar from "@mui/material/Avatar";

import { SPost, SPostWrapper, SPostTitle, SDateWrap } from "./styles";

export const User: FC<any> = ({ avatar, login, id }) => {
  const [cardActive, setCardActive] = useState(null);
  const displayInfo = (id: any) => {
    if (cardActive) {
      setCardActive(null);
    } else {
      setCardActive(id);
    }
  };
  return (
    <SPost onClick={() => displayInfo(id)}>
      <SPostWrapper>
        <SPostTitle>{login}</SPostTitle>
        <Avatar alt="Remy Sharp" src={avatar} sx={{ width: 56, height: 56 }} />
        {cardActive === id && (
          <SDateWrap>
            <div>ID: {id}</div>
          </SDateWrap>
        )}
      </SPostWrapper>
    </SPost>
  );
};
