import React, { useContext, useState } from "react";
import MaterialIcons from "../../components/MaterialIcons";
import GlobalContext from "../../Context/GlobalContext";
import NotePopup from "./NotePopup";

const Note = ({ title, content, color, image, trashed, archived }) => {
	const { theme } = useContext(GlobalContext);
	const [openNotePopup, setOpenNotePopup] = useState(false);
	return (
		<div
			className="note"
			style={{
				backgroundColor: `var(--${color}-${
					theme === "light" ? "100" : "700"
				})`,
			}}
			onClick={() => setOpenNotePopup(true)}
		>
			<div className="note-title">
				<span>{title}</span>
			</div>
			<div className="note-content">{content}</div>
			<div className="note-buttons">
				{!trashed ? (
					<>
						<button
							className="note-button"
							title="Background Color"
						>
							<MaterialIcons>palette</MaterialIcons>
						</button>
						<button className="note-button" title="Copy Note">
							<MaterialIcons>content_copy</MaterialIcons>
						</button>
						<button className="note-button" title="Add to list">
							<MaterialIcons>playlist_add</MaterialIcons>
						</button>
						<button
							className="note-button"
							title={archived ? "Unarchive Note" : "Archive Note"}
						>
							<MaterialIcons>
								{archived ? "unarchive" : "archive"}
							</MaterialIcons>
						</button>
						<button className="note-button" title="Delete Note">
							<MaterialIcons>delete</MaterialIcons>
						</button>
					</>
				) : (
					<>
						<button className="note-button" title="Restore Note">
							<MaterialIcons>restore</MaterialIcons>
						</button>
						<button className="note-button" title="Delete forever">
							<MaterialIcons>delete_forever</MaterialIcons>
						</button>
					</>
				)}
			</div>
			{openNotePopup && (
				<NotePopup
					title={title}
					content={content}
					color={color}
					image={image}
					close={() => setOpenNotePopup(false)}
				/>
			)}
		</div>
	);
};

export default Note;
