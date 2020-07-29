import React, { useState, useCallback } from "react";
import * as Icon from "../dist";
import { IconContext } from "../dist";
import "./index.css";

const App = () => {
  const [color, setColor] = useState<string>("crimson");
  const [weight, setWeight] = useState<
    "thin" | "light" | "regular" | "bold" | "fill" | "duotone"
  >("regular");

  const onHeartClick = useCallback(() => {
    setColor(
      `#${Math.floor(Math.random() * 16777216)
        .toString(16)
        .padStart(6, "0")}`
    );
  }, [setColor]);

  return (
    <IconContext.Provider
      value={{
        color: "#40AAFE",
        size: "1em",
        mirrored: false,
        weight: "regular",
      }}
    >
      <div
        style={{
          color: "white",
          textAlign: "center",
        }}
      >
        <div
          style={{
            verticalAlign: "middle",
            cursor: "pointer",
            userSelect: "none",
          }}
          onClick={onHeartClick}
        >
          <Icon.Heart size={32} color={color} />
          <p style={{ verticalAlign: "center" }}>
            Made with Love from Bub Tub.
          </p>
        </div>
        <Icon.Horse
          style={{ cursor: "pointer" }}
          color="darkorange"
          size={32}
          weight="duotone"
          onClick={() => setWeight("duotone")}
        />
        <Icon.Horse
          style={{ cursor: "pointer" }}
          color="darkmagenta"
          size={32}
          weight="fill"
          onClick={() => setWeight("fill")}
        />
        <Icon.Horse
          style={{ cursor: "pointer" }}
          color="royalblue"
          size={32}
          weight="bold"
          onClick={() => setWeight("bold")}
        />
        <Icon.Horse
          style={{ cursor: "pointer" }}
          size={32}
          weight="regular"
          onClick={() => setWeight("regular")}
        />
        <Icon.Horse
          style={{ cursor: "pointer" }}
          color="crimson"
          size={32}
          weight="light"
          onClick={() => setWeight("light")}
        />
        <Icon.Horse
          style={{ cursor: "pointer" }}
          color="teal"
          size={32}
          weight="thin"
          onClick={() => setWeight("thin")}
        />
        <br />
        <Icon.WifiMedium />
        <Icon.WifiMedium mirrored color="darkorange" size={24} />
        <Icon.WifiMedium mirrored color="darkmagenta" size={24} />
        <Icon.WifiMedium mirrored color="royalblue" size={24} />
        <Icon.WifiMedium weight={weight} size={32} />
        <Icon.WifiMedium weight={weight} color="crimson" size={32} />
        <Icon.WifiMedium weight={weight} color="teal" size={32} />
        <Icon.WifiMedium weight="thin" color={color} size={48} />
        <Icon.WifiMedium weight="light" color={color} size={48} />
        <Icon.WifiMedium weight="regular" color={color} size={48} />
        <Icon.WifiMedium weight="bold" color={color} size={48} />
        <Icon.WifiMedium weight="fill" color={color} size={48} />
        <Icon.WifiMedium weight="duotone" color={color} size={48} />
        <br />
        <Icon.WarningTriangle />
        <Icon.WarningTriangle mirrored color="darkorange" size={24} />
        <Icon.WarningTriangle mirrored color="darkmagenta" size={24} />
        <Icon.WarningTriangle mirrored color="royalblue" size={24} />
        <Icon.WarningTriangle weight={weight} size={32} />
        <Icon.WarningTriangle weight={weight} color="crimson" size={32} />
        <Icon.WarningTriangle weight={weight} color="teal" size={32} />
        <Icon.WarningTriangle weight="thin" color={color} size={48} />
        <Icon.WarningTriangle weight="light" color={color} size={48} />
        <Icon.WarningTriangle weight="regular" color={color} size={48} />
        <Icon.WarningTriangle weight="bold" color={color} size={48} />
        <Icon.WarningTriangle weight="fill" color={color} size={48} />
        <Icon.WarningTriangle weight="duotone" color={color} size={48} />
        <br />
        <Icon.UserCircle />
        <Icon.UserCircle mirrored color="darkorange" size={24} />
        <Icon.UserCircle mirrored color="darkmagenta" size={24} />
        <Icon.UserCircle mirrored color="royalblue" size={24} />
        <Icon.UserCircle weight={weight} size={32} />
        <Icon.UserCircle weight={weight} color="crimson" size={32} />
        <Icon.UserCircle weight={weight} color="teal" size={32} />
        <Icon.UserCircle weight="thin" color={color} size={48} />
        <Icon.UserCircle weight="light" color={color} size={48} />
        <Icon.UserCircle weight="regular" color={color} size={48} />
        <Icon.UserCircle weight="bold" color={color} size={48} />
        <Icon.UserCircle weight="fill" color={color} size={48} />
        <Icon.UserCircle weight="duotone" color={color} size={48} />
        <br />
        <Icon.TwoCircle />
        <Icon.TwoCircle mirrored color="darkorange" size={24} />
        <Icon.TwoCircle mirrored color="darkmagenta" size={24} />
        <Icon.TwoCircle mirrored color="royalblue" size={24} />
        <Icon.TwoCircle weight={weight} size={32} />
        <Icon.TwoCircle weight={weight} color="crimson" size={32} />
        <Icon.TwoCircle weight={weight} color="teal" size={32} />
        <Icon.TwoCircle weight="thin" color={color} size={48} />
        <Icon.TwoCircle weight="light" color={color} size={48} />
        <Icon.TwoCircle weight="regular" color={color} size={48} />
        <Icon.TwoCircle weight="bold" color={color} size={48} />
        <Icon.TwoCircle weight="fill" color={color} size={48} />
        <Icon.TwoCircle weight="duotone" color={color} size={48} />
        <br />
        <Icon.Trash />
        <Icon.Trash mirrored color="darkorange" size={24} />
        <Icon.Trash mirrored color="darkmagenta" size={24} />
        <Icon.Trash mirrored color="royalblue" size={24} />
        <Icon.Trash weight={weight} size={32} />
        <Icon.Trash weight={weight} color="crimson" size={32} />
        <Icon.Trash weight={weight} color="teal" size={32} />
        <Icon.Trash weight="thin" color={color} size={48} />
        <Icon.Trash weight="light" color={color} size={48} />
        <Icon.Trash weight="regular" color={color} size={48} />
        <Icon.Trash weight="bold" color={color} size={48} />
        <Icon.Trash weight="fill" color={color} size={48} />
        <Icon.Trash weight="duotone" color={color} size={48} />
        <br />
        <Icon.Star />
        <Icon.Star mirrored color="darkorange" size={24} />
        <Icon.Star mirrored color="darkmagenta" size={24} />
        <Icon.Star mirrored color="royalblue" size={24} />
        <Icon.Star weight={weight} size={32} />
        <Icon.Star weight={weight} color="crimson" size={32} />
        <Icon.Star weight={weight} color="teal" size={32} />
        <Icon.Star weight="thin" color={color} size={48} />
        <Icon.Star weight="light" color={color} size={48} />
        <Icon.Star weight="regular" color={color} size={48} />
        <Icon.Star weight="bold" color={color} size={48} />
        <Icon.Star weight="fill" color={color} size={48} />
        <Icon.Star weight="duotone" color={color} size={48} />
        <br />
        <Icon.SpeakerOff />
        <Icon.SpeakerOff mirrored color="darkorange" size={24} />
        <Icon.SpeakerOff mirrored color="darkmagenta" size={24} />
        <Icon.SpeakerOff mirrored color="royalblue" size={24} />
        <Icon.SpeakerOff weight={weight} size={32} />
        <Icon.SpeakerOff weight={weight} color="crimson" size={32} />
        <Icon.SpeakerOff weight={weight} color="teal" size={32} />
        <Icon.SpeakerOff weight="thin" color={color} size={48} />
        <Icon.SpeakerOff weight="light" color={color} size={48} />
        <Icon.SpeakerOff weight="regular" color={color} size={48} />
        <Icon.SpeakerOff weight="bold" color={color} size={48} />
        <Icon.SpeakerOff weight="fill" color={color} size={48} />
        <Icon.SpeakerOff weight="duotone" color={color} size={48} />
        <br />
        <Icon.SmileyMeh />
        <Icon.SmileyMeh mirrored color="darkorange" size={24} />
        <Icon.SmileyMeh mirrored color="darkmagenta" size={24} />
        <Icon.SmileyMeh mirrored color="royalblue" size={24} />
        <Icon.SmileyMeh weight={weight} size={32} />
        <Icon.SmileyMeh weight={weight} color="crimson" size={32} />
        <Icon.SmileyMeh weight={weight} color="teal" size={32} />
        <Icon.SmileyMeh weight="thin" color={color} size={48} />
        <Icon.SmileyMeh weight="light" color={color} size={48} />
        <Icon.SmileyMeh weight="regular" color={color} size={48} />
        <Icon.SmileyMeh weight="bold" color={color} size={48} />
        <Icon.SmileyMeh weight="fill" color={color} size={48} />
        <Icon.SmileyMeh weight="duotone" color={color} size={48} />
        <br />
        <Icon.Smiley />
        <Icon.Smiley mirrored color="darkorange" size={24} />
        <Icon.Smiley mirrored color="darkmagenta" size={24} />
        <Icon.Smiley mirrored color="royalblue" size={24} />
        <Icon.Smiley weight={weight} size={32} />
        <Icon.Smiley weight={weight} color="crimson" size={32} />
        <Icon.Smiley weight={weight} color="teal" size={32} />
        <Icon.Smiley weight="thin" color={color} size={48} />
        <Icon.Smiley weight="light" color={color} size={48} />
        <Icon.Smiley weight="regular" color={color} size={48} />
        <Icon.Smiley weight="bold" color={color} size={48} />
        <Icon.Smiley weight="fill" color={color} size={48} />
        <Icon.Smiley weight="duotone" color={color} size={48} />
        <br />
        <Icon.Search />
        <Icon.Search mirrored color="darkorange" size={24} />
        <Icon.Search mirrored color="darkmagenta" size={24} />
        <Icon.Search mirrored color="royalblue" size={24} />
        <Icon.Search weight={weight} size={32} />
        <Icon.Search weight={weight} color="crimson" size={32} />
        <Icon.Search weight={weight} color="teal" size={32} />
        <Icon.Search weight="thin" color={color} size={48} />
        <Icon.Search weight="light" color={color} size={48} />
        <Icon.Search weight="regular" color={color} size={48} />
        <Icon.Search weight="bold" color={color} size={48} />
        <Icon.Search weight="fill" color={color} size={48} />
        <Icon.Search weight="duotone" color={color} size={48} />
        <br />
        <Icon.Prohibit />
        <Icon.Prohibit mirrored color="darkorange" size={24} />
        <Icon.Prohibit mirrored color="darkmagenta" size={24} />
        <Icon.Prohibit mirrored color="royalblue" size={24} />
        <Icon.Prohibit weight={weight} size={32} />
        <Icon.Prohibit weight={weight} color="crimson" size={32} />
        <Icon.Prohibit weight={weight} color="teal" size={32} />
        <Icon.Prohibit weight="thin" color={color} size={48} />
        <Icon.Prohibit weight="light" color={color} size={48} />
        <Icon.Prohibit weight="regular" color={color} size={48} />
        <Icon.Prohibit weight="bold" color={color} size={48} />
        <Icon.Prohibit weight="fill" color={color} size={48} />
        <Icon.Prohibit weight="duotone" color={color} size={48} />
        <br />
        <Icon.PlusCircle />
        <Icon.PlusCircle mirrored color="darkorange" size={24} />
        <Icon.PlusCircle mirrored color="darkmagenta" size={24} />
        <Icon.PlusCircle mirrored color="royalblue" size={24} />
        <Icon.PlusCircle weight={weight} size={32} />
        <Icon.PlusCircle weight={weight} color="crimson" size={32} />
        <Icon.PlusCircle weight={weight} color="teal" size={32} />
        <Icon.PlusCircle weight="thin" color={color} size={48} />
        <Icon.PlusCircle weight="light" color={color} size={48} />
        <Icon.PlusCircle weight="regular" color={color} size={48} />
        <Icon.PlusCircle weight="bold" color={color} size={48} />
        <Icon.PlusCircle weight="fill" color={color} size={48} />
        <Icon.PlusCircle weight="duotone" color={color} size={48} />
        <br />
        <Icon.PlayCircle />
        <Icon.PlayCircle mirrored color="darkorange" size={24} />
        <Icon.PlayCircle mirrored color="darkmagenta" size={24} />
        <Icon.PlayCircle mirrored color="royalblue" size={24} />
        <Icon.PlayCircle weight={weight} size={32} />
        <Icon.PlayCircle weight={weight} color="crimson" size={32} />
        <Icon.PlayCircle weight={weight} color="teal" size={32} />
        <Icon.PlayCircle weight="thin" color={color} size={48} />
        <Icon.PlayCircle weight="light" color={color} size={48} />
        <Icon.PlayCircle weight="regular" color={color} size={48} />
        <Icon.PlayCircle weight="bold" color={color} size={48} />
        <Icon.PlayCircle weight="fill" color={color} size={48} />
        <Icon.PlayCircle weight="duotone" color={color} size={48} />
        <br />
        <Icon.Pin />
        <Icon.Pin mirrored color="darkorange" size={24} />
        <Icon.Pin mirrored color="darkmagenta" size={24} />
        <Icon.Pin mirrored color="royalblue" size={24} />
        <Icon.Pin weight={weight} size={32} />
        <Icon.Pin weight={weight} color="crimson" size={32} />
        <Icon.Pin weight={weight} color="teal" size={32} />
        <Icon.Pin weight="thin" color={color} size={48} />
        <Icon.Pin weight="light" color={color} size={48} />
        <Icon.Pin weight="regular" color={color} size={48} />
        <Icon.Pin weight="bold" color={color} size={48} />
        <Icon.Pin weight="fill" color={color} size={48} />
        <Icon.Pin weight="duotone" color={color} size={48} />
        <br />
        <Icon.PenNib />
        <Icon.PenNib mirrored color="darkorange" size={24} />
        <Icon.PenNib mirrored color="darkmagenta" size={24} />
        <Icon.PenNib mirrored color="royalblue" size={24} />
        <Icon.PenNib weight={weight} size={32} />
        <Icon.PenNib weight={weight} color="crimson" size={32} />
        <Icon.PenNib weight={weight} color="teal" size={32} />
        <Icon.PenNib weight="thin" color={color} size={48} />
        <Icon.PenNib weight="light" color={color} size={48} />
        <Icon.PenNib weight="regular" color={color} size={48} />
        <Icon.PenNib weight="bold" color={color} size={48} />
        <Icon.PenNib weight="fill" color={color} size={48} />
        <Icon.PenNib weight="duotone" color={color} size={48} />
        <br />
        <Icon.PencilLine />
        <Icon.PencilLine mirrored color="darkorange" size={24} />
        <Icon.PencilLine mirrored color="darkmagenta" size={24} />
        <Icon.PencilLine mirrored color="royalblue" size={24} />
        <Icon.PencilLine weight={weight} size={32} />
        <Icon.PencilLine weight={weight} color="crimson" size={32} />
        <Icon.PencilLine weight={weight} color="teal" size={32} />
        <Icon.PencilLine weight="thin" color={color} size={48} />
        <Icon.PencilLine weight="light" color={color} size={48} />
        <Icon.PencilLine weight="regular" color={color} size={48} />
        <Icon.PencilLine weight="bold" color={color} size={48} />
        <Icon.PencilLine weight="fill" color={color} size={48} />
        <Icon.PencilLine weight="duotone" color={color} size={48} />
        <br />
        <Icon.PencilClip />
        <Icon.PencilClip mirrored color="darkorange" size={24} />
        <Icon.PencilClip mirrored color="darkmagenta" size={24} />
        <Icon.PencilClip mirrored color="royalblue" size={24} />
        <Icon.PencilClip weight={weight} size={32} />
        <Icon.PencilClip weight={weight} color="crimson" size={32} />
        <Icon.PencilClip weight={weight} color="teal" size={32} />
        <Icon.PencilClip weight="thin" color={color} size={48} />
        <Icon.PencilClip weight="light" color={color} size={48} />
        <Icon.PencilClip weight="regular" color={color} size={48} />
        <Icon.PencilClip weight="bold" color={color} size={48} />
        <Icon.PencilClip weight="fill" color={color} size={48} />
        <Icon.PencilClip weight="duotone" color={color} size={48} />
        <br />
        <Icon.MusicNotesSixteenth />
        <Icon.MusicNotesSixteenth mirrored color="darkorange" size={24} />
        <Icon.MusicNotesSixteenth mirrored color="darkmagenta" size={24} />
        <Icon.MusicNotesSixteenth mirrored color="royalblue" size={24} />
        <Icon.MusicNotesSixteenth weight={weight} size={32} />
        <Icon.MusicNotesSixteenth weight={weight} color="crimson" size={32} />
        <Icon.MusicNotesSixteenth weight={weight} color="teal" size={32} />
        <Icon.MusicNotesSixteenth weight="thin" color={color} size={48} />
        <Icon.MusicNotesSixteenth weight="light" color={color} size={48} />
        <Icon.MusicNotesSixteenth weight="regular" color={color} size={48} />
        <Icon.MusicNotesSixteenth weight="bold" color={color} size={48} />
        <Icon.MusicNotesSixteenth weight="fill" color={color} size={48} />
        <Icon.MusicNotesSixteenth weight="duotone" color={color} size={48} />
        <br />
        <Icon.MinusCircle />
        <Icon.MinusCircle mirrored color="darkorange" size={24} />
        <Icon.MinusCircle mirrored color="darkmagenta" size={24} />
        <Icon.MinusCircle mirrored color="royalblue" size={24} />
        <Icon.MinusCircle weight={weight} size={32} />
        <Icon.MinusCircle weight={weight} color="crimson" size={32} />
        <Icon.MinusCircle weight={weight} color="teal" size={32} />
        <Icon.MinusCircle weight="thin" color={color} size={48} />
        <Icon.MinusCircle weight="light" color={color} size={48} />
        <Icon.MinusCircle weight="regular" color={color} size={48} />
        <Icon.MinusCircle weight="bold" color={color} size={48} />
        <Icon.MinusCircle weight="fill" color={color} size={48} />
        <Icon.MinusCircle weight="duotone" color={color} size={48} />
        <br />
        <Icon.Microphone />
        <Icon.Microphone mirrored color="darkorange" size={24} />
        <Icon.Microphone mirrored color="darkmagenta" size={24} />
        <Icon.Microphone mirrored color="royalblue" size={24} />
        <Icon.Microphone weight={weight} size={32} />
        <Icon.Microphone weight={weight} color="crimson" size={32} />
        <Icon.Microphone weight={weight} color="teal" size={32} />
        <Icon.Microphone weight="thin" color={color} size={48} />
        <Icon.Microphone weight="light" color={color} size={48} />
        <Icon.Microphone weight="regular" color={color} size={48} />
        <Icon.Microphone weight="bold" color={color} size={48} />
        <Icon.Microphone weight="fill" color={color} size={48} />
        <Icon.Microphone weight="duotone" color={color} size={48} />
        <br />
        <Icon.Horse />
        <Icon.Horse mirrored color="darkorange" size={24} />
        <Icon.Horse mirrored color="darkmagenta" size={24} />
        <Icon.Horse mirrored color="royalblue" size={24} />
        <Icon.Horse weight={weight} size={32} />
        <Icon.Horse weight={weight} color="crimson" size={32} />
        <Icon.Horse weight={weight} color="teal" size={32} />
        <Icon.Horse weight="thin" color={color} size={48} />
        <Icon.Horse weight="light" color={color} size={48} />
        <Icon.Horse weight="regular" color={color} size={48} />
        <Icon.Horse weight="bold" color={color} size={48} />
        <Icon.Horse weight="fill" color={color} size={48} />
        <Icon.Horse weight="duotone" color={color} size={48} />
        <br />
        <Icon.Heart />
        <Icon.Heart mirrored color="darkorange" size={24} />
        <Icon.Heart mirrored color="darkmagenta" size={24} />
        <Icon.Heart mirrored color="royalblue" size={24} />
        <Icon.Heart weight={weight} size={32} />
        <Icon.Heart weight={weight} color="crimson" size={32} />
        <Icon.Heart weight={weight} color="teal" size={32} />
        <Icon.Heart weight="thin" color={color} size={48} />
        <Icon.Heart weight="light" color={color} size={48} />
        <Icon.Heart weight="regular" color={color} size={48} />
        <Icon.Heart weight="bold" color={color} size={48} />
        <Icon.Heart weight="fill" color={color} size={48} />
        <Icon.Heart weight="duotone" color={color} size={48} />
        <br />
        <Icon.FolderMinimal />
        <Icon.FolderMinimal mirrored color="darkorange" size={24} />
        <Icon.FolderMinimal mirrored color="darkmagenta" size={24} />
        <Icon.FolderMinimal mirrored color="royalblue" size={24} />
        <Icon.FolderMinimal weight={weight} size={32} />
        <Icon.FolderMinimal weight={weight} color="crimson" size={32} />
        <Icon.FolderMinimal weight={weight} color="teal" size={32} />
        <Icon.FolderMinimal weight="thin" color={color} size={48} />
        <Icon.FolderMinimal weight="light" color={color} size={48} />
        <Icon.FolderMinimal weight="regular" color={color} size={48} />
        <Icon.FolderMinimal weight="bold" color={color} size={48} />
        <Icon.FolderMinimal weight="fill" color={color} size={48} />
        <Icon.FolderMinimal weight="duotone" color={color} size={48} />
        <br />
        <Icon.FolderDip />
        <Icon.FolderDip mirrored color="darkorange" size={24} />
        <Icon.FolderDip mirrored color="darkmagenta" size={24} />
        <Icon.FolderDip mirrored color="royalblue" size={24} />
        <Icon.FolderDip weight={weight} size={32} />
        <Icon.FolderDip weight={weight} color="crimson" size={32} />
        <Icon.FolderDip weight={weight} color="teal" size={32} />
        <Icon.FolderDip weight="thin" color={color} size={48} />
        <Icon.FolderDip weight="light" color={color} size={48} />
        <Icon.FolderDip weight="regular" color={color} size={48} />
        <Icon.FolderDip weight="bold" color={color} size={48} />
        <Icon.FolderDip weight="fill" color={color} size={48} />
        <Icon.FolderDip weight="duotone" color={color} size={48} />
        <br />
        <Icon.Folder />
        <Icon.Folder mirrored color="darkorange" size={24} />
        <Icon.Folder mirrored color="darkmagenta" size={24} />
        <Icon.Folder mirrored color="royalblue" size={24} />
        <Icon.Folder weight={weight} size={32} />
        <Icon.Folder weight={weight} color="crimson" size={32} />
        <Icon.Folder weight={weight} color="teal" size={32} />
        <Icon.Folder weight="thin" color={color} size={48} />
        <Icon.Folder weight="light" color={color} size={48} />
        <Icon.Folder weight="regular" color={color} size={48} />
        <Icon.Folder weight="bold" color={color} size={48} />
        <Icon.Folder weight="fill" color={color} size={48} />
        <Icon.Folder weight="duotone" color={color} size={48} />
        <br />
        <Icon.EnvelopeAlt />
        <Icon.EnvelopeAlt mirrored color="darkorange" size={24} />
        <Icon.EnvelopeAlt mirrored color="darkmagenta" size={24} />
        <Icon.EnvelopeAlt mirrored color="royalblue" size={24} />
        <Icon.EnvelopeAlt weight={weight} size={32} />
        <Icon.EnvelopeAlt weight={weight} color="crimson" size={32} />
        <Icon.EnvelopeAlt weight={weight} color="teal" size={32} />
        <Icon.EnvelopeAlt weight="thin" color={color} size={48} />
        <Icon.EnvelopeAlt weight="light" color={color} size={48} />
        <Icon.EnvelopeAlt weight="regular" color={color} size={48} />
        <Icon.EnvelopeAlt weight="bold" color={color} size={48} />
        <Icon.EnvelopeAlt weight="fill" color={color} size={48} />
        <Icon.EnvelopeAlt weight="duotone" color={color} size={48} />
        <br />
        <Icon.Envelope />
        <Icon.Envelope mirrored color="darkorange" size={24} />
        <Icon.Envelope mirrored color="darkmagenta" size={24} />
        <Icon.Envelope mirrored color="royalblue" size={24} />
        <Icon.Envelope weight={weight} size={32} />
        <Icon.Envelope weight={weight} color="crimson" size={32} />
        <Icon.Envelope weight={weight} color="teal" size={32} />
        <Icon.Envelope weight="thin" color={color} size={48} />
        <Icon.Envelope weight="light" color={color} size={48} />
        <Icon.Envelope weight="regular" color={color} size={48} />
        <Icon.Envelope weight="bold" color={color} size={48} />
        <Icon.Envelope weight="fill" color={color} size={48} />
        <Icon.Envelope weight="duotone" color={color} size={48} />
        <br />
        <Icon.Droid />
        <Icon.Droid mirrored color="darkorange" size={24} />
        <Icon.Droid mirrored color="darkmagenta" size={24} />
        <Icon.Droid mirrored color="royalblue" size={24} />
        <Icon.Droid weight={weight} size={32} />
        <Icon.Droid weight={weight} color="crimson" size={32} />
        <Icon.Droid weight={weight} color="teal" size={32} />
        <Icon.Droid weight="thin" color={color} size={48} />
        <Icon.Droid weight="light" color={color} size={48} />
        <Icon.Droid weight="regular" color={color} size={48} />
        <Icon.Droid weight="bold" color={color} size={48} />
        <Icon.Droid weight="fill" color={color} size={48} />
        <Icon.Droid weight="duotone" color={color} size={48} />
        <br />
        <Icon.DocumentText />
        <Icon.DocumentText mirrored color="darkorange" size={24} />
        <Icon.DocumentText mirrored color="darkmagenta" size={24} />
        <Icon.DocumentText mirrored color="royalblue" size={24} />
        <Icon.DocumentText weight={weight} size={32} />
        <Icon.DocumentText weight={weight} color="crimson" size={32} />
        <Icon.DocumentText weight={weight} color="teal" size={32} />
        <Icon.DocumentText weight="thin" color={color} size={48} />
        <Icon.DocumentText weight="light" color={color} size={48} />
        <Icon.DocumentText weight="regular" color={color} size={48} />
        <Icon.DocumentText weight="bold" color={color} size={48} />
        <Icon.DocumentText weight="fill" color={color} size={48} />
        <Icon.DocumentText weight="duotone" color={color} size={48} />
        <br />
        <Icon.Cube />
        <Icon.Cube mirrored color="darkorange" size={24} />
        <Icon.Cube mirrored color="darkmagenta" size={24} />
        <Icon.Cube mirrored color="royalblue" size={24} />
        <Icon.Cube weight={weight} size={32} />
        <Icon.Cube weight={weight} color="crimson" size={32} />
        <Icon.Cube weight={weight} color="teal" size={32} />
        <Icon.Cube weight="thin" color={color} size={48} />
        <Icon.Cube weight="light" color={color} size={48} />
        <Icon.Cube weight="regular" color={color} size={48} />
        <Icon.Cube weight="bold" color={color} size={48} />
        <Icon.Cube weight="fill" color={color} size={48} />
        <Icon.Cube weight="duotone" color={color} size={48} />
        <br />
        <Icon.Copy />
        <Icon.Copy mirrored color="darkorange" size={24} />
        <Icon.Copy mirrored color="darkmagenta" size={24} />
        <Icon.Copy mirrored color="royalblue" size={24} />
        <Icon.Copy weight={weight} size={32} />
        <Icon.Copy weight={weight} color="crimson" size={32} />
        <Icon.Copy weight={weight} color="teal" size={32} />
        <Icon.Copy weight="thin" color={color} size={48} />
        <Icon.Copy weight="light" color={color} size={48} />
        <Icon.Copy weight="regular" color={color} size={48} />
        <Icon.Copy weight="bold" color={color} size={48} />
        <Icon.Copy weight="fill" color={color} size={48} />
        <Icon.Copy weight="duotone" color={color} size={48} />
        <br />
        <Icon.Cloud />
        <Icon.Cloud mirrored color="darkorange" size={24} />
        <Icon.Cloud mirrored color="darkmagenta" size={24} />
        <Icon.Cloud mirrored color="royalblue" size={24} />
        <Icon.Cloud weight={weight} size={32} />
        <Icon.Cloud weight={weight} color="crimson" size={32} />
        <Icon.Cloud weight={weight} color="teal" size={32} />
        <Icon.Cloud weight="thin" color={color} size={48} />
        <Icon.Cloud weight="light" color={color} size={48} />
        <Icon.Cloud weight="regular" color={color} size={48} />
        <Icon.Cloud weight="bold" color={color} size={48} />
        <Icon.Cloud weight="fill" color={color} size={48} />
        <Icon.Cloud weight="duotone" color={color} size={48} />
        <br />
        <Icon.Clock />
        <Icon.Clock mirrored color="darkorange" size={24} />
        <Icon.Clock mirrored color="darkmagenta" size={24} />
        <Icon.Clock mirrored color="royalblue" size={24} />
        <Icon.Clock weight={weight} size={32} />
        <Icon.Clock weight={weight} color="crimson" size={32} />
        <Icon.Clock weight={weight} color="teal" size={32} />
        <Icon.Clock weight="thin" color={color} size={48} />
        <Icon.Clock weight="light" color={color} size={48} />
        <Icon.Clock weight="regular" color={color} size={48} />
        <Icon.Clock weight="bold" color={color} size={48} />
        <Icon.Clock weight="fill" color={color} size={48} />
        <Icon.Clock weight="duotone" color={color} size={48} />
        <br />
        <Icon.CheckCircle />
        <Icon.CheckCircle mirrored color="darkorange" size={24} />
        <Icon.CheckCircle mirrored color="darkmagenta" size={24} />
        <Icon.CheckCircle mirrored color="royalblue" size={24} />
        <Icon.CheckCircle weight={weight} size={32} />
        <Icon.CheckCircle weight={weight} color="crimson" size={32} />
        <Icon.CheckCircle weight={weight} color="teal" size={32} />
        <Icon.CheckCircle weight="thin" color={color} size={48} />
        <Icon.CheckCircle weight="light" color={color} size={48} />
        <Icon.CheckCircle weight="regular" color={color} size={48} />
        <Icon.CheckCircle weight="bold" color={color} size={48} />
        <Icon.CheckCircle weight="fill" color={color} size={48} />
        <Icon.CheckCircle weight="duotone" color={color} size={48} />
        <br />
        <Icon.CalendarX />
        <Icon.CalendarX mirrored color="darkorange" size={24} />
        <Icon.CalendarX mirrored color="darkmagenta" size={24} />
        <Icon.CalendarX mirrored color="royalblue" size={24} />
        <Icon.CalendarX weight={weight} size={32} />
        <Icon.CalendarX weight={weight} color="crimson" size={32} />
        <Icon.CalendarX weight={weight} color="teal" size={32} />
        <Icon.CalendarX weight="thin" color={color} size={48} />
        <Icon.CalendarX weight="light" color={color} size={48} />
        <Icon.CalendarX weight="regular" color={color} size={48} />
        <Icon.CalendarX weight="bold" color={color} size={48} />
        <Icon.CalendarX weight="fill" color={color} size={48} />
        <Icon.CalendarX weight="duotone" color={color} size={48} />
        <br />
        <Icon.BookClosed />
        <Icon.BookClosed mirrored color="darkorange" size={24} />
        <Icon.BookClosed mirrored color="darkmagenta" size={24} />
        <Icon.BookClosed mirrored color="royalblue" size={24} />
        <Icon.BookClosed weight={weight} size={32} />
        <Icon.BookClosed weight={weight} color="crimson" size={32} />
        <Icon.BookClosed weight={weight} color="teal" size={32} />
        <Icon.BookClosed weight="thin" color={color} size={48} />
        <Icon.BookClosed weight="light" color={color} size={48} />
        <Icon.BookClosed weight="regular" color={color} size={48} />
        <Icon.BookClosed weight="bold" color={color} size={48} />
        <Icon.BookClosed weight="fill" color={color} size={48} />
        <Icon.BookClosed weight="duotone" color={color} size={48} />
        <br />
        <Icon.BatteryHalf />
        <Icon.BatteryHalf mirrored color="darkorange" size={24} />
        <Icon.BatteryHalf mirrored color="darkmagenta" size={24} />
        <Icon.BatteryHalf mirrored color="royalblue" size={24} />
        <Icon.BatteryHalf weight={weight} size={32} />
        <Icon.BatteryHalf weight={weight} color="crimson" size={32} />
        <Icon.BatteryHalf weight={weight} color="teal" size={32} />
        <Icon.BatteryHalf weight="thin" color={color} size={48} />
        <Icon.BatteryHalf weight="light" color={color} size={48} />
        <Icon.BatteryHalf weight="regular" color={color} size={48} />
        <Icon.BatteryHalf weight="bold" color={color} size={48} />
        <Icon.BatteryHalf weight="fill" color={color} size={48} />
        <Icon.BatteryHalf weight="duotone" color={color} size={48} />
        <br />
        <Icon.Backspace />
        <Icon.Backspace mirrored color="darkorange" size={24} />
        <Icon.Backspace mirrored color="darkmagenta" size={24} />
        <Icon.Backspace mirrored color="royalblue" size={24} />
        <Icon.Backspace weight={weight} size={32} />
        <Icon.Backspace weight={weight} color="crimson" size={32} />
        <Icon.Backspace weight={weight} color="teal" size={32} />
        <Icon.Backspace weight="thin" color={color} size={48} />
        <Icon.Backspace weight="light" color={color} size={48} />
        <Icon.Backspace weight="regular" color={color} size={48} />
        <Icon.Backspace weight="bold" color={color} size={48} />
        <Icon.Backspace weight="fill" color={color} size={48} />
        <Icon.Backspace weight="duotone" color={color} size={48} />
        <br />
        <Icon.ArrowUpLeftCircle />
        <Icon.ArrowUpLeftCircle mirrored color="darkorange" size={24} />
        <Icon.ArrowUpLeftCircle mirrored color="darkmagenta" size={24} />
        <Icon.ArrowUpLeftCircle mirrored color="royalblue" size={24} />
        <Icon.ArrowUpLeftCircle weight={weight} size={32} />
        <Icon.ArrowUpLeftCircle weight={weight} color="crimson" size={32} />
        <Icon.ArrowUpLeftCircle weight={weight} color="teal" size={32} />
        <Icon.ArrowUpLeftCircle weight="thin" color={color} size={48} />
        <Icon.ArrowUpLeftCircle weight="light" color={color} size={48} />
        <Icon.ArrowUpLeftCircle weight="regular" color={color} size={48} />
        <Icon.ArrowUpLeftCircle weight="bold" color={color} size={48} />
        <Icon.ArrowUpLeftCircle weight="fill" color={color} size={48} />
        <Icon.ArrowUpLeftCircle weight="duotone" color={color} size={48} />
        <br />
        <Icon.ArrowUpRightCircle />
        <Icon.ArrowUpRightCircle mirrored color="darkorange" size={24} />
        <Icon.ArrowUpRightCircle mirrored color="darkmagenta" size={24} />
        <Icon.ArrowUpRightCircle mirrored color="royalblue" size={24} />
        <Icon.ArrowUpRightCircle weight={weight} size={32} />
        <Icon.ArrowUpRightCircle weight={weight} color="crimson" size={32} />
        <Icon.ArrowUpRightCircle weight={weight} color="teal" size={32} />
        <Icon.ArrowUpRightCircle weight="thin" color={color} size={48} />
        <Icon.ArrowUpRightCircle weight="light" color={color} size={48} />
        <Icon.ArrowUpRightCircle weight="regular" color={color} size={48} />
        <Icon.ArrowUpRightCircle weight="bold" color={color} size={48} />
        <Icon.ArrowUpRightCircle weight="fill" color={color} size={48} />
        <Icon.ArrowUpRightCircle weight="duotone" color={color} size={48} />
        <br />
      </div>
    </IconContext.Provider>
  );
};

export default App;
