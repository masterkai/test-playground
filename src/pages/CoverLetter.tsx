import { useImmer } from "use-immer";
import { Box, Button, TextField, Typography } from "@mui/material";

const CoverLetter = () => {
	const [data, setData] = useImmer({
		companyName: "CoverLetter",
		jobTitle: "Frontend Developer",
	});
	const content = `
尊敬的招聘主管：

您好！我是劉凱銘，非常興奮有機會應徵${data.companyName}
的${data.jobTitle}職位。透過我的經驗和技能，我相信我能夠為貴公司的團隊帶來價值。

在過去的幾年中，我在前端開發領域積累了豐富的經驗。我精通於使用React.js和Angular.js等主流框架，並且擁有堅實的HTML、CSS和JavaScript基礎。我曾參與並主導過多個成功的專案，這些專案涉及使用者介面的設計、開發和優化。我熟悉現代前端工具和技術，如Webpack、Babel等，以確保項目的高效建置和部署。

在我之前的工作中，我曾參與開發過複雜的應用程式，特別是在與後端團隊合作時，我能夠順利串接API並解決各種前端挑戰。我了解並注重使用者體驗，努力保持代碼的清晰度和可維護性，同時注重代碼品質和性能優化。

我以學習能力和問題解決能力為傲，始終保持對新技術的開放態度，並不斷追求提升。我相信在${data.companyName}的團隊中，我將能夠為公司的發展做出積極的貢獻。

期待有機會與您進一步交流，進一步討論我如何可以成為${data.companyName}的有價值成員。謝謝您撥冗閱讀我的申請，期待能夠有機會與您共事。

誠摯的，
劉凱銘
0916166023
neoliukai@outlook.com`;

	return (
		<div>
			<h1>Cover Letter</h1>
			<TextField
				label="Job Title"
				value={data.jobTitle}
				onChange={(e) =>
					setData((draft) => {
						draft.jobTitle = e.target.value;
					})
				}
			/>
			<TextField
				label="company name"
				value={data.companyName}
				onChange={(e) =>
					setData((draft) => {
						draft.companyName = e.target.value;
					})
				}
			/>
			<Box
				component={"div"}
				sx={{ p: 1, maxWidth: "500px", margin: "auto" }}
			>
				<Typography variant={"body1"}>{content}</Typography>
			</Box>
			<Button
				variant="outlined"
				onClick={() => navigator.clipboard.writeText(content)}
			>
				Copy Content
			</Button>
		</div>
	);
};

export default CoverLetter;