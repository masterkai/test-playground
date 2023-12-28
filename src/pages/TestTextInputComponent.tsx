import React, { ChangeEvent, useEffect } from "react";
import Button from "@mui/material/Button";
import { Box, Stack, TextField } from "@mui/material";
import { useImmer } from "use-immer";

type PItem = [dName: string, num1: number, num2: number];
const TestingTextInputComponent = () => {
    const defaultArray: PItem[] = [
        ["start", 0, 0],
        ["end", 0, 0],
    ];
    const [name, setName] = useImmer<string>("");
    const [num, setNum] = useImmer<number>(0);
    const [pList, setPList] = useImmer<PItem[]>(defaultArray);
    const handleChange = (e: any) => {
        const value = e.target.value;
        setName(value);
    };
    const handleValueChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        idx: number,
        Place: Prize.PlaceStart | Prize.PlaceEnd | Prize.Money,
    ) => {
        switch (Place) {
            case Prize.PlaceStart:
                setPList((draft) => {
                    draft[idx][Place] = e.target.value;
                });
                break;
            case Prize.PlaceEnd:
                setPList((draft) => {
                    draft[idx][Place] = +e.target.value;
                });
                break;
            case Prize.Money:
                setPList((draft) => {
                    draft[idx][Place] = +e.target.value;
                });
                break;
            default:
                return;
        }
    };
    useEffect(() => {
        if (num > 2) {
            setPList(defaultArray);
            const count = num - 2;
            const insertItems: PItem[] = Array.from(
                { length: count },
                (_, idx) => [`第${idx + 1}次加碼`, 0, 0],
            );
            setPList((draft) => {
                draft.splice(1, 0, ...insertItems);
            });
        }
    }, [num]);

    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Hello world! Testing Text Input
            </h1>
            <Button variant="contained">Hello world!</Button>
            <Box
                component="form"
                sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    inputMode={"text"}
                    id="outlined-basic"
                    variant="outlined"
                    value={name}
                    onChange={(e) => handleChange(e)}
                />
                <TextField
                    inputMode={"numeric"}
                    id="outlined-basic"
                    variant="outlined"
                    value={num}
                    onChange={(e) => setNum(+e.target.value)}
                />
            </Box>
            <Box>name: {name}</Box>
            <Stack flex={"row"} style={{ width: "100%", margin: "auto" }}>
                {pList.map((p, idx) => (
                    <ArrayInputItem
                        data={p}
                        index={idx}
                        key={idx}
                        handleChange={handleValueChange}
                    />
                ))}
            </Stack>
        </div>
    );
};
export default TestingTextInputComponent;

enum Prize {
    PlaceStart,
    PlaceEnd,
    Money,
}

interface ArrayInputItemProps {
    data: PItem;
    index: number;
    handleChange: (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        idx: number,
        Place: Prize.PlaceStart | Prize.PlaceEnd | Prize.Money,
    ) => void;
}

function ArrayInputItem(props: ArrayInputItemProps) {
    const { data, index, handleChange } = props;
    const displayName = data[Prize.PlaceStart].replace(/：/g, "") + "：";
    return (
        <Box
            component="form"
            sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
                display: "flex",
                justifyContent: "center",
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                inputMode={"text"}
                id="outlined-basic1"
                variant="outlined"
                value={displayName}
                onChange={(e) => handleChange(e, index, Prize.PlaceStart)}
            />
            <TextField
                inputMode={"numeric"}
                id="outlined-basic2"
                variant="outlined"
                value={data[Prize.PlaceEnd]}
                onChange={(e) => handleChange(e, index, Prize.PlaceEnd)}
            />
            <TextField
                inputMode={"numeric"}
                id="outlined-basic3"
                variant="outlined"
                value={data[Prize.Money]}
                onChange={(e) => handleChange(e, index, Prize.Money)}
            />
        </Box>
    );
}
