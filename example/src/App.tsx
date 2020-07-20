import React, { useState } from "react";

import * as Icon from "phosphor-react";
import "phosphor-react/dist/index.css";

const App = () => {
  const [color, setColor] = useState<string>("crimson");
  const [weight, setWeight] = useState<
    "thin" | "light" | "regular" | "bold" | "fill" | "duotone"
  >("regular");

  const onHeartClick = () => {
    setColor(
      `#${Math.floor(Math.random() * 16777216)
        .toString(16)
        .padStart(6, "0")}`
    );
  };

  return (
    <div
      style={{
        backgroundColor: "#242424",
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
        <Icon.Heart size={48} color={color} />
        <p style={{ verticalAlign: "center" }}>Made with Love from Bub Tub.</p>
      </div>
      <Icon.Horse
        style={{ cursor: "pointer" }}
        color="darkorange"
        size={48}
        weight="duotone"
        onClick={() => setWeight("duotone")}
      />
      <Icon.Horse
        style={{ cursor: "pointer" }}
        color="darkmagenta"
        size={48}
        weight="fill"
        onClick={() => setWeight("fill")}
      />
      <Icon.Horse
        style={{ cursor: "pointer" }}
        color="royalblue"
        size={48}
        weight="bold"
        onClick={() => setWeight("bold")}
      />
      <Icon.Horse
        style={{ cursor: "pointer" }}
        size={48}
        weight="regular"
        onClick={() => setWeight("regular")}
      />
      <Icon.Horse
        style={{ cursor: "pointer" }}
        color="crimson"
        size={48}
        weight="light"
        onClick={() => setWeight("light")}
      />
      <Icon.Horse
        style={{ cursor: "pointer" }}
        color="teal"
        size={48}
        weight="thin"
        onClick={() => setWeight("thin")}
      />
      <br />
      <Icon.ArrowUpRightCircle />
      <Icon.ArrowUpRightCircle color="darkorange" size={24} />
      <Icon.ArrowUpRightCircle color="darkmagenta" size={24} />
      <Icon.ArrowUpRightCircle color="royalblue" size={24} />
      <Icon.ArrowUpRightCircle weight={weight} size={48} />
      <Icon.ArrowUpRightCircle weight={weight} color="crimson" size={48} />
      <Icon.ArrowUpRightCircle weight={weight} color="teal" size={48} />
      <Icon.ArrowUpRightCircle weight="thin" color={color} size={64} />
      <Icon.ArrowUpRightCircle weight="light" color={color} size={64} />
      <Icon.ArrowUpRightCircle weight="regular" color={color} size={64} />
      <Icon.ArrowUpRightCircle weight="bold" color={color} size={64} />
      <Icon.ArrowUpRightCircle weight="fill" color={color} size={64} />
      <Icon.ArrowUpRightCircle weight="duotone" color={color} size={64} />
      <br />
      <Icon.Backspace />
      <Icon.Backspace color="darkorange" size={24} />
      <Icon.Backspace color="darkmagenta" size={24} />
      <Icon.Backspace color="royalblue" size={24} />
      <Icon.Backspace weight={weight} size={48} />
      <Icon.Backspace weight={weight} color="crimson" size={48} />
      <Icon.Backspace weight={weight} color="teal" size={48} />
      <Icon.Backspace weight="thin" color={color} size={64} />
      <Icon.Backspace weight="light" color={color} size={64} />
      <Icon.Backspace weight="regular" color={color} size={64} />
      <Icon.Backspace weight="bold" color={color} size={64} />
      <Icon.Backspace weight="fill" color={color} size={64} />
      <Icon.Backspace weight="duotone" color={color} size={64} />
      <br />
      <Icon.BatteryHalf />
      <Icon.BatteryHalf color="darkorange" size={24} />
      <Icon.BatteryHalf color="darkmagenta" size={24} />
      <Icon.BatteryHalf color="royalblue" size={24} />
      <Icon.BatteryHalf weight={weight} size={48} />
      <Icon.BatteryHalf weight={weight} color="crimson" size={48} />
      <Icon.BatteryHalf weight={weight} color="teal" size={48} />
      <Icon.BatteryHalf weight="thin" color={color} size={64} />
      <Icon.BatteryHalf weight="light" color={color} size={64} />
      <Icon.BatteryHalf weight="regular" color={color} size={64} />
      <Icon.BatteryHalf weight="bold" color={color} size={64} />
      <Icon.BatteryHalf weight="fill" color={color} size={64} />
      <Icon.BatteryHalf weight="duotone" color={color} size={64} />
      <br />
      <Icon.BookClosed />
      <Icon.BookClosed color="darkorange" size={24} />
      <Icon.BookClosed color="darkmagenta" size={24} />
      <Icon.BookClosed color="royalblue" size={24} />
      <Icon.BookClosed weight={weight} size={48} />
      <Icon.BookClosed weight={weight} color="crimson" size={48} />
      <Icon.BookClosed weight={weight} color="teal" size={48} />
      <Icon.BookClosed weight="thin" color={color} size={64} />
      <Icon.BookClosed weight="light" color={color} size={64} />
      <Icon.BookClosed weight="regular" color={color} size={64} />
      <Icon.BookClosed weight="bold" color={color} size={64} />
      <Icon.BookClosed weight="fill" color={color} size={64} />
      <Icon.BookClosed weight="duotone" color={color} size={64} />
      <br />
      <Icon.CalendarX />
      <Icon.CalendarX color="darkorange" size={24} />
      <Icon.CalendarX color="darkmagenta" size={24} />
      <Icon.CalendarX color="royalblue" size={24} />
      <Icon.CalendarX weight={weight} size={48} />
      <Icon.CalendarX weight={weight} color="crimson" size={48} />
      <Icon.CalendarX weight={weight} color="teal" size={48} />
      <Icon.CalendarX weight="thin" color={color} size={64} />
      <Icon.CalendarX weight="light" color={color} size={64} />
      <Icon.CalendarX weight="regular" color={color} size={64} />
      <Icon.CalendarX weight="bold" color={color} size={64} />
      <Icon.CalendarX weight="fill" color={color} size={64} />
      <Icon.CalendarX weight="duotone" color={color} size={64} />
      <br />
      <Icon.CheckCircle />
      <Icon.CheckCircle color="darkorange" size={24} />
      <Icon.CheckCircle color="darkmagenta" size={24} />
      <Icon.CheckCircle color="royalblue" size={24} />
      <Icon.CheckCircle weight={weight} size={48} />
      <Icon.CheckCircle weight={weight} color="crimson" size={48} />
      <Icon.CheckCircle weight={weight} color="teal" size={48} />
      <Icon.CheckCircle weight="thin" color={color} size={64} />
      <Icon.CheckCircle weight="light" color={color} size={64} />
      <Icon.CheckCircle weight="regular" color={color} size={64} />
      <Icon.CheckCircle weight="bold" color={color} size={64} />
      <Icon.CheckCircle weight="fill" color={color} size={64} />
      <Icon.CheckCircle weight="duotone" color={color} size={64} />
      <br />
      <Icon.Clock />
      <Icon.Clock color="darkorange" size={24} />
      <Icon.Clock color="darkmagenta" size={24} />
      <Icon.Clock color="royalblue" size={24} />
      <Icon.Clock weight={weight} size={48} />
      <Icon.Clock weight={weight} color="crimson" size={48} />
      <Icon.Clock weight={weight} color="teal" size={48} />
      <Icon.Clock weight="thin" color={color} size={64} />
      <Icon.Clock weight="light" color={color} size={64} />
      <Icon.Clock weight="regular" color={color} size={64} />
      <Icon.Clock weight="bold" color={color} size={64} />
      <Icon.Clock weight="fill" color={color} size={64} />
      <Icon.Clock weight="duotone" color={color} size={64} />
      <br />
      <Icon.Cloud />
      <Icon.Cloud color="darkorange" size={24} />
      <Icon.Cloud color="darkmagenta" size={24} />
      <Icon.Cloud color="royalblue" size={24} />
      <Icon.Cloud weight={weight} size={48} />
      <Icon.Cloud weight={weight} color="crimson" size={48} />
      <Icon.Cloud weight={weight} color="teal" size={48} />
      <Icon.Cloud weight="thin" color={color} size={64} />
      <Icon.Cloud weight="light" color={color} size={64} />
      <Icon.Cloud weight="regular" color={color} size={64} />
      <Icon.Cloud weight="bold" color={color} size={64} />
      <Icon.Cloud weight="fill" color={color} size={64} />
      <Icon.Cloud weight="duotone" color={color} size={64} />
      <br />
      <Icon.Copy />
      <Icon.Copy color="darkorange" size={24} />
      <Icon.Copy color="darkmagenta" size={24} />
      <Icon.Copy color="royalblue" size={24} />
      <Icon.Copy weight={weight} size={48} />
      <Icon.Copy weight={weight} color="crimson" size={48} />
      <Icon.Copy weight={weight} color="teal" size={48} />
      <Icon.Copy weight="thin" color={color} size={64} />
      <Icon.Copy weight="light" color={color} size={64} />
      <Icon.Copy weight="regular" color={color} size={64} />
      <Icon.Copy weight="bold" color={color} size={64} />
      <Icon.Copy weight="fill" color={color} size={64} />
      <Icon.Copy weight="duotone" color={color} size={64} />
      <br />
      <Icon.Cube />
      <Icon.Cube color="darkorange" size={24} />
      <Icon.Cube color="darkmagenta" size={24} />
      <Icon.Cube color="royalblue" size={24} />
      <Icon.Cube weight={weight} size={48} />
      <Icon.Cube weight={weight} color="crimson" size={48} />
      <Icon.Cube weight={weight} color="teal" size={48} />
      <Icon.Cube weight="thin" color={color} size={64} />
      <Icon.Cube weight="light" color={color} size={64} />
      <Icon.Cube weight="regular" color={color} size={64} />
      <Icon.Cube weight="bold" color={color} size={64} />
      <Icon.Cube weight="fill" color={color} size={64} />
      <Icon.Cube weight="duotone" color={color} size={64} />
      <br />
      <Icon.DocumentText />
      <Icon.DocumentText color="darkorange" size={24} />
      <Icon.DocumentText color="darkmagenta" size={24} />
      <Icon.DocumentText color="royalblue" size={24} />
      <Icon.DocumentText weight={weight} size={48} />
      <Icon.DocumentText weight={weight} color="crimson" size={48} />
      <Icon.DocumentText weight={weight} color="teal" size={48} />
      <Icon.DocumentText weight="thin" color={color} size={64} />
      <Icon.DocumentText weight="light" color={color} size={64} />
      <Icon.DocumentText weight="regular" color={color} size={64} />
      <Icon.DocumentText weight="bold" color={color} size={64} />
      <Icon.DocumentText weight="fill" color={color} size={64} />
      <Icon.DocumentText weight="duotone" color={color} size={64} />
      <br />
      <Icon.Droid />
      <Icon.Droid color="darkorange" size={24} />
      <Icon.Droid color="darkmagenta" size={24} />
      <Icon.Droid color="royalblue" size={24} />
      <Icon.Droid weight={weight} size={48} />
      <Icon.Droid weight={weight} color="crimson" size={48} />
      <Icon.Droid weight={weight} color="teal" size={48} />
      <Icon.Droid weight="thin" color={color} size={64} />
      <Icon.Droid weight="light" color={color} size={64} />
      <Icon.Droid weight="regular" color={color} size={64} />
      <Icon.Droid weight="bold" color={color} size={64} />
      <Icon.Droid weight="fill" color={color} size={64} />
      <Icon.Droid weight="duotone" color={color} size={64} />
      <br />
      <Icon.Envelope />
      <Icon.Envelope color="darkorange" size={24} />
      <Icon.Envelope color="darkmagenta" size={24} />
      <Icon.Envelope color="royalblue" size={24} />
      <Icon.Envelope weight={weight} size={48} />
      <Icon.Envelope weight={weight} color="crimson" size={48} />
      <Icon.Envelope weight={weight} color="teal" size={48} />
      <Icon.Envelope weight="thin" color={color} size={64} />
      <Icon.Envelope weight="light" color={color} size={64} />
      <Icon.Envelope weight="regular" color={color} size={64} />
      <Icon.Envelope weight="bold" color={color} size={64} />
      <Icon.Envelope weight="fill" color={color} size={64} />
      <Icon.Envelope weight="duotone" color={color} size={64} />
      <br />
      <Icon.EnvelopeAlt />
      <Icon.EnvelopeAlt color="darkorange" size={24} />
      <Icon.EnvelopeAlt color="darkmagenta" size={24} />
      <Icon.EnvelopeAlt color="royalblue" size={24} />
      <Icon.EnvelopeAlt weight={weight} size={48} />
      <Icon.EnvelopeAlt weight={weight} color="crimson" size={48} />
      <Icon.EnvelopeAlt weight={weight} color="teal" size={48} />
      <Icon.EnvelopeAlt weight="thin" color={color} size={64} />
      <Icon.EnvelopeAlt weight="light" color={color} size={64} />
      <Icon.EnvelopeAlt weight="regular" color={color} size={64} />
      <Icon.EnvelopeAlt weight="bold" color={color} size={64} />
      <Icon.EnvelopeAlt weight="fill" color={color} size={64} />
      <Icon.EnvelopeAlt weight="duotone" color={color} size={64} />
      <br />
      <Icon.Folder />
      <Icon.Folder color="darkorange" size={24} />
      <Icon.Folder color="darkmagenta" size={24} />
      <Icon.Folder color="royalblue" size={24} />
      <Icon.Folder weight={weight} size={48} />
      <Icon.Folder weight={weight} color="crimson" size={48} />
      <Icon.Folder weight={weight} color="teal" size={48} />
      <Icon.Folder weight="thin" color={color} size={64} />
      <Icon.Folder weight="light" color={color} size={64} />
      <Icon.Folder weight="regular" color={color} size={64} />
      <Icon.Folder weight="bold" color={color} size={64} />
      <Icon.Folder weight="fill" color={color} size={64} />
      <Icon.Folder weight="duotone" color={color} size={64} />
      <br />
      <Icon.FolderDip />
      <Icon.FolderDip color="darkorange" size={24} />
      <Icon.FolderDip color="darkmagenta" size={24} />
      <Icon.FolderDip color="royalblue" size={24} />
      <Icon.FolderDip weight={weight} size={48} />
      <Icon.FolderDip weight={weight} color="crimson" size={48} />
      <Icon.FolderDip weight={weight} color="teal" size={48} />
      <Icon.FolderDip weight="thin" color={color} size={64} />
      <Icon.FolderDip weight="light" color={color} size={64} />
      <Icon.FolderDip weight="regular" color={color} size={64} />
      <Icon.FolderDip weight="bold" color={color} size={64} />
      <Icon.FolderDip weight="fill" color={color} size={64} />
      <Icon.FolderDip weight="duotone" color={color} size={64} />
      <br />
      <Icon.FolderMinimal />
      <Icon.FolderMinimal color="darkorange" size={24} />
      <Icon.FolderMinimal color="darkmagenta" size={24} />
      <Icon.FolderMinimal color="royalblue" size={24} />
      <Icon.FolderMinimal weight={weight} size={48} />
      <Icon.FolderMinimal weight={weight} color="crimson" size={48} />
      <Icon.FolderMinimal weight={weight} color="teal" size={48} />
      <Icon.FolderMinimal weight="thin" color={color} size={64} />
      <Icon.FolderMinimal weight="light" color={color} size={64} />
      <Icon.FolderMinimal weight="regular" color={color} size={64} />
      <Icon.FolderMinimal weight="bold" color={color} size={64} />
      <Icon.FolderMinimal weight="fill" color={color} size={64} />
      <Icon.FolderMinimal weight="duotone" color={color} size={64} />
      <br />
      <Icon.Heart />
      <Icon.Heart color="darkorange" size={24} />
      <Icon.Heart color="darkmagenta" size={24} />
      <Icon.Heart color="royalblue" size={24} />
      <Icon.Heart weight={weight} size={48} />
      <Icon.Heart weight={weight} color="crimson" size={48} />
      <Icon.Heart weight={weight} color="teal" size={48} />
      <Icon.Heart weight="thin" color={color} size={64} />
      <Icon.Heart weight="light" color={color} size={64} />
      <Icon.Heart weight="regular" color={color} size={64} />
      <Icon.Heart weight="bold" color={color} size={64} />
      <Icon.Heart weight="fill" color={color} size={64} />
      <Icon.Heart weight="duotone" color={color} size={64} />
      <br />
      <Icon.Horse />
      <Icon.Horse color="darkorange" size={24} />
      <Icon.Horse color="darkmagenta" size={24} />
      <Icon.Horse color="royalblue" size={24} />
      <Icon.Horse weight={weight} size={48} />
      <Icon.Horse weight={weight} color="crimson" size={48} />
      <Icon.Horse weight={weight} color="teal" size={48} />
      <Icon.Horse weight="thin" color={color} size={64} />
      <Icon.Horse weight="light" color={color} size={64} />
      <Icon.Horse weight="regular" color={color} size={64} />
      <Icon.Horse weight="bold" color={color} size={64} />
      <Icon.Horse weight="fill" color={color} size={64} />
      <Icon.Horse weight="duotone" color={color} size={64} />
      <br />
      <Icon.Microphone />
      <Icon.Microphone color="darkorange" size={24} />
      <Icon.Microphone color="darkmagenta" size={24} />
      <Icon.Microphone color="royalblue" size={24} />
      <Icon.Microphone weight={weight} size={48} />
      <Icon.Microphone weight={weight} color="crimson" size={48} />
      <Icon.Microphone weight={weight} color="teal" size={48} />
      <Icon.Microphone weight="thin" color={color} size={64} />
      <Icon.Microphone weight="light" color={color} size={64} />
      <Icon.Microphone weight="regular" color={color} size={64} />
      <Icon.Microphone weight="bold" color={color} size={64} />
      <Icon.Microphone weight="fill" color={color} size={64} />
      <Icon.Microphone weight="duotone" color={color} size={64} />
      <br />
      <Icon.MinusCircle />
      <Icon.MinusCircle color="darkorange" size={24} />
      <Icon.MinusCircle color="darkmagenta" size={24} />
      <Icon.MinusCircle color="royalblue" size={24} />
      <Icon.MinusCircle weight={weight} size={48} />
      <Icon.MinusCircle weight={weight} color="crimson" size={48} />
      <Icon.MinusCircle weight={weight} color="teal" size={48} />
      <Icon.MinusCircle weight="thin" color={color} size={64} />
      <Icon.MinusCircle weight="light" color={color} size={64} />
      <Icon.MinusCircle weight="regular" color={color} size={64} />
      <Icon.MinusCircle weight="bold" color={color} size={64} />
      <Icon.MinusCircle weight="fill" color={color} size={64} />
      <Icon.MinusCircle weight="duotone" color={color} size={64} />
      <br />
      <Icon.MusicNotesSixteenth />
      <Icon.MusicNotesSixteenth color="darkorange" size={24} />
      <Icon.MusicNotesSixteenth color="darkmagenta" size={24} />
      <Icon.MusicNotesSixteenth color="royalblue" size={24} />
      <Icon.MusicNotesSixteenth weight={weight} size={48} />
      <Icon.MusicNotesSixteenth weight={weight} color="crimson" size={48} />
      <Icon.MusicNotesSixteenth weight={weight} color="teal" size={48} />
      <Icon.MusicNotesSixteenth weight="thin" color={color} size={64} />
      <Icon.MusicNotesSixteenth weight="light" color={color} size={64} />
      <Icon.MusicNotesSixteenth weight="regular" color={color} size={64} />
      <Icon.MusicNotesSixteenth weight="bold" color={color} size={64} />
      <Icon.MusicNotesSixteenth weight="fill" color={color} size={64} />
      <Icon.MusicNotesSixteenth weight="duotone" color={color} size={64} />
      <br />
      <Icon.PencilClip />
      <Icon.PencilClip color="darkorange" size={24} />
      <Icon.PencilClip color="darkmagenta" size={24} />
      <Icon.PencilClip color="royalblue" size={24} />
      <Icon.PencilClip weight={weight} size={48} />
      <Icon.PencilClip weight={weight} color="crimson" size={48} />
      <Icon.PencilClip weight={weight} color="teal" size={48} />
      <Icon.PencilClip weight="thin" color={color} size={64} />
      <Icon.PencilClip weight="light" color={color} size={64} />
      <Icon.PencilClip weight="regular" color={color} size={64} />
      <Icon.PencilClip weight="bold" color={color} size={64} />
      <Icon.PencilClip weight="fill" color={color} size={64} />
      <Icon.PencilClip weight="duotone" color={color} size={64} />
      <br />
      <Icon.PencilLine />
      <Icon.PencilLine color="darkorange" size={24} />
      <Icon.PencilLine color="darkmagenta" size={24} />
      <Icon.PencilLine color="royalblue" size={24} />
      <Icon.PencilLine weight={weight} size={48} />
      <Icon.PencilLine weight={weight} color="crimson" size={48} />
      <Icon.PencilLine weight={weight} color="teal" size={48} />
      <Icon.PencilLine weight="thin" color={color} size={64} />
      <Icon.PencilLine weight="light" color={color} size={64} />
      <Icon.PencilLine weight="regular" color={color} size={64} />
      <Icon.PencilLine weight="bold" color={color} size={64} />
      <Icon.PencilLine weight="fill" color={color} size={64} />
      <Icon.PencilLine weight="duotone" color={color} size={64} />
      <br />
      <Icon.PenNib />
      <Icon.PenNib color="darkorange" size={24} />
      <Icon.PenNib color="darkmagenta" size={24} />
      <Icon.PenNib color="royalblue" size={24} />
      <Icon.PenNib weight={weight} size={48} />
      <Icon.PenNib weight={weight} color="crimson" size={48} />
      <Icon.PenNib weight={weight} color="teal" size={48} />
      <Icon.PenNib weight="thin" color={color} size={64} />
      <Icon.PenNib weight="light" color={color} size={64} />
      <Icon.PenNib weight="regular" color={color} size={64} />
      <Icon.PenNib weight="bold" color={color} size={64} />
      <Icon.PenNib weight="fill" color={color} size={64} />
      <Icon.PenNib weight="duotone" color={color} size={64} />
      <br />
      <Icon.Pin />
      <Icon.Pin color="darkorange" size={24} />
      <Icon.Pin color="darkmagenta" size={24} />
      <Icon.Pin color="royalblue" size={24} />
      <Icon.Pin weight={weight} size={48} />
      <Icon.Pin weight={weight} color="crimson" size={48} />
      <Icon.Pin weight={weight} color="teal" size={48} />
      <Icon.Pin weight="thin" color={color} size={64} />
      <Icon.Pin weight="light" color={color} size={64} />
      <Icon.Pin weight="regular" color={color} size={64} />
      <Icon.Pin weight="bold" color={color} size={64} />
      <Icon.Pin weight="fill" color={color} size={64} />
      <Icon.Pin weight="duotone" color={color} size={64} />
      <br />
      <Icon.PlayCircle />
      <Icon.PlayCircle color="darkorange" size={24} />
      <Icon.PlayCircle color="darkmagenta" size={24} />
      <Icon.PlayCircle color="royalblue" size={24} />
      <Icon.PlayCircle weight={weight} size={48} />
      <Icon.PlayCircle weight={weight} color="crimson" size={48} />
      <Icon.PlayCircle weight={weight} color="teal" size={48} />
      <Icon.PlayCircle weight="thin" color={color} size={64} />
      <Icon.PlayCircle weight="light" color={color} size={64} />
      <Icon.PlayCircle weight="regular" color={color} size={64} />
      <Icon.PlayCircle weight="bold" color={color} size={64} />
      <Icon.PlayCircle weight="fill" color={color} size={64} />
      <Icon.PlayCircle weight="duotone" color={color} size={64} />
      <br />
      <Icon.PlusCircle />
      <Icon.PlusCircle color="darkorange" size={24} />
      <Icon.PlusCircle color="darkmagenta" size={24} />
      <Icon.PlusCircle color="royalblue" size={24} />
      <Icon.PlusCircle weight={weight} size={48} />
      <Icon.PlusCircle weight={weight} color="crimson" size={48} />
      <Icon.PlusCircle weight={weight} color="teal" size={48} />
      <Icon.PlusCircle weight="thin" color={color} size={64} />
      <Icon.PlusCircle weight="light" color={color} size={64} />
      <Icon.PlusCircle weight="regular" color={color} size={64} />
      <Icon.PlusCircle weight="bold" color={color} size={64} />
      <Icon.PlusCircle weight="fill" color={color} size={64} />
      <Icon.PlusCircle weight="duotone" color={color} size={64} />
      <br />
      <Icon.Prohibit />
      <Icon.Prohibit color="darkorange" size={24} />
      <Icon.Prohibit color="darkmagenta" size={24} />
      <Icon.Prohibit color="royalblue" size={24} />
      <Icon.Prohibit weight={weight} size={48} />
      <Icon.Prohibit weight={weight} color="crimson" size={48} />
      <Icon.Prohibit weight={weight} color="teal" size={48} />
      <Icon.Prohibit weight="thin" color={color} size={64} />
      <Icon.Prohibit weight="light" color={color} size={64} />
      <Icon.Prohibit weight="regular" color={color} size={64} />
      <Icon.Prohibit weight="bold" color={color} size={64} />
      <Icon.Prohibit weight="fill" color={color} size={64} />
      <Icon.Prohibit weight="duotone" color={color} size={64} />
      <br />
      <Icon.Search />
      <Icon.Search color="darkorange" size={24} />
      <Icon.Search color="darkmagenta" size={24} />
      <Icon.Search color="royalblue" size={24} />
      <Icon.Search weight={weight} size={48} />
      <Icon.Search weight={weight} color="crimson" size={48} />
      <Icon.Search weight={weight} color="teal" size={48} />
      <Icon.Search weight="thin" color={color} size={64} />
      <Icon.Search weight="light" color={color} size={64} />
      <Icon.Search weight="regular" color={color} size={64} />
      <Icon.Search weight="bold" color={color} size={64} />
      <Icon.Search weight="fill" color={color} size={64} />
      <Icon.Search weight="duotone" color={color} size={64} />
      <br />
      <Icon.SearchAlt />
      <Icon.SearchAlt color="darkorange" size={24} />
      <Icon.SearchAlt color="darkmagenta" size={24} />
      <Icon.SearchAlt color="royalblue" size={24} />
      <Icon.SearchAlt weight={weight} size={48} />
      <Icon.SearchAlt weight={weight} color="crimson" size={48} />
      <Icon.SearchAlt weight={weight} color="teal" size={48} />
      <Icon.SearchAlt weight="thin" color={color} size={64} />
      <Icon.SearchAlt weight="light" color={color} size={64} />
      <Icon.SearchAlt weight="regular" color={color} size={64} />
      <Icon.SearchAlt weight="bold" color={color} size={64} />
      <Icon.SearchAlt weight="fill" color={color} size={64} />
      <Icon.SearchAlt weight="duotone" color={color} size={64} />
      <br />
      <Icon.Smiley />
      <Icon.Smiley color="darkorange" size={24} />
      <Icon.Smiley color="darkmagenta" size={24} />
      <Icon.Smiley color="royalblue" size={24} />
      <Icon.Smiley weight={weight} size={48} />
      <Icon.Smiley weight={weight} color="crimson" size={48} />
      <Icon.Smiley weight={weight} color="teal" size={48} />
      <Icon.Smiley weight="thin" color={color} size={64} />
      <Icon.Smiley weight="light" color={color} size={64} />
      <Icon.Smiley weight="regular" color={color} size={64} />
      <Icon.Smiley weight="bold" color={color} size={64} />
      <Icon.Smiley weight="fill" color={color} size={64} />
      <Icon.Smiley weight="duotone" color={color} size={64} />
      <br />
      <Icon.SmileyMeh />
      <Icon.SmileyMeh color="darkorange" size={24} />
      <Icon.SmileyMeh color="darkmagenta" size={24} />
      <Icon.SmileyMeh color="royalblue" size={24} />
      <Icon.SmileyMeh weight={weight} size={48} />
      <Icon.SmileyMeh weight={weight} color="crimson" size={48} />
      <Icon.SmileyMeh weight={weight} color="teal" size={48} />
      <Icon.SmileyMeh weight="thin" color={color} size={64} />
      <Icon.SmileyMeh weight="light" color={color} size={64} />
      <Icon.SmileyMeh weight="regular" color={color} size={64} />
      <Icon.SmileyMeh weight="bold" color={color} size={64} />
      <Icon.SmileyMeh weight="fill" color={color} size={64} />
      <Icon.SmileyMeh weight="duotone" color={color} size={64} />
      <br />
      <Icon.SpeakerOff />
      <Icon.SpeakerOff color="darkorange" size={24} />
      <Icon.SpeakerOff color="darkmagenta" size={24} />
      <Icon.SpeakerOff color="royalblue" size={24} />
      <Icon.SpeakerOff weight={weight} size={48} />
      <Icon.SpeakerOff weight={weight} color="crimson" size={48} />
      <Icon.SpeakerOff weight={weight} color="teal" size={48} />
      <Icon.SpeakerOff weight="thin" color={color} size={64} />
      <Icon.SpeakerOff weight="light" color={color} size={64} />
      <Icon.SpeakerOff weight="regular" color={color} size={64} />
      <Icon.SpeakerOff weight="bold" color={color} size={64} />
      <Icon.SpeakerOff weight="fill" color={color} size={64} />
      <Icon.SpeakerOff weight="duotone" color={color} size={64} />
      <br />
      <Icon.Star />
      <Icon.Star color="darkorange" size={24} />
      <Icon.Star color="darkmagenta" size={24} />
      <Icon.Star color="royalblue" size={24} />
      <Icon.Star weight={weight} size={48} />
      <Icon.Star weight={weight} color="crimson" size={48} />
      <Icon.Star weight={weight} color="teal" size={48} />
      <Icon.Star weight="thin" color={color} size={64} />
      <Icon.Star weight="light" color={color} size={64} />
      <Icon.Star weight="regular" color={color} size={64} />
      <Icon.Star weight="bold" color={color} size={64} />
      <Icon.Star weight="fill" color={color} size={64} />
      <Icon.Star weight="duotone" color={color} size={64} />
      <br />
      <Icon.Trash />
      <Icon.Trash color="darkorange" size={24} />
      <Icon.Trash color="darkmagenta" size={24} />
      <Icon.Trash color="royalblue" size={24} />
      <Icon.Trash weight={weight} size={48} />
      <Icon.Trash weight={weight} color="crimson" size={48} />
      <Icon.Trash weight={weight} color="teal" size={48} />
      <Icon.Trash weight="thin" color={color} size={64} />
      <Icon.Trash weight="light" color={color} size={64} />
      <Icon.Trash weight="regular" color={color} size={64} />
      <Icon.Trash weight="bold" color={color} size={64} />
      <Icon.Trash weight="fill" color={color} size={64} />
      <Icon.Trash weight="duotone" color={color} size={64} />
      <br />
      <Icon.TwoCircle />
      <Icon.TwoCircle color="darkorange" size={24} />
      <Icon.TwoCircle color="darkmagenta" size={24} />
      <Icon.TwoCircle color="royalblue" size={24} />
      <Icon.TwoCircle weight={weight} size={48} />
      <Icon.TwoCircle weight={weight} color="crimson" size={48} />
      <Icon.TwoCircle weight={weight} color="teal" size={48} />
      <Icon.TwoCircle weight="thin" color={color} size={64} />
      <Icon.TwoCircle weight="light" color={color} size={64} />
      <Icon.TwoCircle weight="regular" color={color} size={64} />
      <Icon.TwoCircle weight="bold" color={color} size={64} />
      <Icon.TwoCircle weight="fill" color={color} size={64} />
      <Icon.TwoCircle weight="duotone" color={color} size={64} />
      <br />
      <Icon.UserCircle />
      <Icon.UserCircle color="darkorange" size={24} />
      <Icon.UserCircle color="darkmagenta" size={24} />
      <Icon.UserCircle color="royalblue" size={24} />
      <Icon.UserCircle weight={weight} size={48} />
      <Icon.UserCircle weight={weight} color="crimson" size={48} />
      <Icon.UserCircle weight={weight} color="teal" size={48} />
      <Icon.UserCircle weight="thin" color={color} size={64} />
      <Icon.UserCircle weight="light" color={color} size={64} />
      <Icon.UserCircle weight="regular" color={color} size={64} />
      <Icon.UserCircle weight="bold" color={color} size={64} />
      <Icon.UserCircle weight="fill" color={color} size={64} />
      <Icon.UserCircle weight="duotone" color={color} size={64} />
      <br />
      <Icon.WarningTriangle />
      <Icon.WarningTriangle color="darkorange" size={24} />
      <Icon.WarningTriangle color="darkmagenta" size={24} />
      <Icon.WarningTriangle color="royalblue" size={24} />
      <Icon.WarningTriangle weight={weight} size={48} />
      <Icon.WarningTriangle weight={weight} color="crimson" size={48} />
      <Icon.WarningTriangle weight={weight} color="teal" size={48} />
      <Icon.WarningTriangle weight="thin" color={color} size={64} />
      <Icon.WarningTriangle weight="light" color={color} size={64} />
      <Icon.WarningTriangle weight="regular" color={color} size={64} />
      <Icon.WarningTriangle weight="bold" color={color} size={64} />
      <Icon.WarningTriangle weight="fill" color={color} size={64} />
      <Icon.WarningTriangle weight="duotone" color={color} size={64} />
      <br />
      <Icon.WifiMedium />
      <Icon.WifiMedium color="darkorange" size={24} />
      <Icon.WifiMedium color="darkmagenta" size={24} />
      <Icon.WifiMedium color="royalblue" size={24} />
      <Icon.WifiMedium weight={weight} size={48} />
      <Icon.WifiMedium weight={weight} color="crimson" size={48} />
      <Icon.WifiMedium weight={weight} color="teal" size={48} />
      <Icon.WifiMedium weight="thin" color={color} size={64} />
      <Icon.WifiMedium weight="light" color={color} size={64} />
      <Icon.WifiMedium weight="regular" color={color} size={64} />
      <Icon.WifiMedium weight="bold" color={color} size={64} />
      <Icon.WifiMedium weight="fill" color={color} size={64} />
      <Icon.WifiMedium weight="duotone" color={color} size={64} />
      <br />
    </div>
  );
};

export default App;
