import { createBoard } from "@wixc3/react-board";
import Cubic from "../../components/Cubic";

export default createBoard({
    name: "New Board",
    Board: () => <Cubic key={null} />,
    environmentProps: {
        canvasWidth: 202,
        canvasHeight: 202,
        windowHeight: 505,
        windowWidth: 1000,
    },
});
