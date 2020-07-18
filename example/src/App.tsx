import React, { useState } from 'react'

import {
  SixSquare,
  Trash,
  EightCircle,
  ArrowRightCircle,
  Basketball,
  BatteryHalf,
  BookOpen,
  CalendarSix,
  CheckCircle,
  Clock,
  Cloud,
  Cube,
  Delete,
  Document,
  DocumentText,
  DocumentX,
  Droid,
  Folder,
  FolderDip,
  Heart,
  Horse,
  Intersect,
  Mail,
  Medium,
  SmileyMeh,
  Microphone,
  MusicNotesAngled,
  MusicNotesStraight,
  PencilLine,
  PenNib,
  ProfileCircle,
  Rewind,
  Star,
  Table,
  VolumeOff,
  Warning,
  WifiFull,
  WifiLow,
  WifiNone
} from 'phosphor-react'
import 'phosphor-react/dist/index.css'

const App = () => {
  const [weight, setWeight] = useState<'regular' | 'fill' | 'duotone'>(
    'duotone'
  )

  const onClick = () => {
    switch (weight) {
      case 'regular':
        setWeight('fill')
        break
      case 'fill':
        setWeight('duotone')
        break
      case 'duotone':
        setWeight('regular')
        break
      default:
        throw new Error('Invalid weight')
    }
  }

  return (
    <div>
      <SixSquare />
      {/* <br /> */}
      <SixSquare color='darkorange' size={24} />
      <SixSquare color='darkmagenta' size={24} />
      <SixSquare color='royalblue' size={24} />
      {/* <br /> */}
      <SixSquare size={48} />
      <SixSquare color='crimson' size={48} />
      <SixSquare color='teal' size={48} />
      {/* <br /> */}
      <Trash />
      {/* <br /> */}
      <Trash color='darkorange' size={24} />
      <Trash color='darkmagenta' size={24} />
      <Trash color='royalblue' size={24} />
      {/* <br /> */}
      <Trash size={48} />
      <Trash color='crimson' size={48} weight='fill' />
      <Trash color='teal' size={48} weight={weight} onClick={onClick} />
      {/* <br /> */}
      <EightCircle />
      {/* <br /> */}
      <EightCircle color='darkorange' size={24} />
      <EightCircle color='darkmagenta' size={24} />
      <EightCircle color='royalblue' size={24} />
      {/* <br /> */}
      <EightCircle size={48} />
      <EightCircle color='crimson' size={48} />
      <EightCircle color='teal' size={48} />
      {/* <br /> */}
      <ArrowRightCircle />
      {/* <br /> */}
      <ArrowRightCircle color='darkorange' size={24} />
      <ArrowRightCircle color='darkmagenta' size={24} />
      <ArrowRightCircle color='royalblue' size={24} />
      {/* <br /> */}
      <ArrowRightCircle size={48} />
      <ArrowRightCircle color='crimson' size={48} />
      <ArrowRightCircle color='teal' size={48} />
      {/* <br /> */}
      <Basketball />
      {/* <br /> */}
      <Basketball color='darkorange' size={24} />
      <Basketball color='darkmagenta' size={24} />
      <Basketball color='royalblue' size={24} />
      {/* <br /> */}
      <Basketball size={48} />
      <Basketball color='crimson' size={48} />
      <Basketball color='teal' size={48} />
      {/* <br /> */}
      <BatteryHalf weight='fill' />
      {/* <br /> */}
      <BatteryHalf color='darkorange' size={24} weight='fill' />
      <BatteryHalf color='darkmagenta' size={24} />
      <BatteryHalf color='royalblue' size={24} weight='fill' />
      {/* <br /> */}
      <BatteryHalf size={48} />
      <BatteryHalf color='crimson' size={48} weight='fill' />
      <BatteryHalf color='teal' size={48} />
      {/* <br /> */}
      <BookOpen />
      {/* <br /> */}
      <BookOpen color='darkorange' size={24} />
      <BookOpen color='darkmagenta' size={24} />
      <BookOpen color='royalblue' size={24} />
      {/* <br /> */}
      <BookOpen size={48} />
      <BookOpen color='crimson' size={48} />
      <BookOpen color='teal' size={48} />
      {/* <br /> */}
      <CalendarSix />
      {/* <br /> */}
      <CalendarSix color='darkorange' size={24} />
      <CalendarSix color='darkmagenta' size={24} />
      <CalendarSix color='royalblue' size={24} />
      {/* <br /> */}
      <CalendarSix size={48} />
      <CalendarSix color='crimson' size={48} />
      <CalendarSix color='teal' size={48} />
      {/* <br /> */}
      <CheckCircle />
      {/* <br /> */}
      <CheckCircle color='darkorange' size={24} />
      <CheckCircle color='darkmagenta' size={24} />
      <CheckCircle color='royalblue' size={24} />
      {/* <br /> */}
      <CheckCircle size={48} />
      <CheckCircle color='crimson' size={48} />
      <CheckCircle color='teal' size={48} />
      {/* <br /> */}
      <Clock />
      {/* <br /> */}
      <Clock color='darkorange' size={24} />
      <Clock color='darkmagenta' size={24} />
      <Clock color='royalblue' size={24} />
      {/* <br /> */}
      <Clock size={48} />
      <Clock color='crimson' size={48} />
      <Clock color='teal' size={48} />
      {/* <br /> */}
      <Cloud />
      {/* <br /> */}
      <Cloud color='darkorange' size={24} />
      <Cloud color='darkmagenta' size={24} />
      <Cloud color='royalblue' size={24} />
      {/* <br /> */}
      <Cloud size={48} />
      <Cloud color='crimson' size={48} />
      <Cloud color='teal' size={48} />
      {/* <br /> */}
      <Cube />
      {/* <br /> */}
      <Cube color='darkorange' size={24} />
      <Cube color='darkmagenta' size={24} />
      <Cube color='royalblue' size={24} />
      {/* <br /> */}
      <Cube size={48} />
      <Cube color='crimson' size={48} />
      <Cube color='teal' size={48} />
      {/* <br /> */}
      <Delete />
      {/* <br /> */}
      <Delete color='darkorange' size={24} />
      <Delete color='darkmagenta' size={24} />
      <Delete color='royalblue' size={24} />
      {/* <br /> */}
      <Delete size={48} />
      <Delete color='crimson' size={48} />
      <Delete color='teal' size={48} />
      {/* <br /> */}
      <Document />
      {/* <br /> */}
      <Document color='darkorange' size={24} />
      <Document color='darkmagenta' size={24} />
      <Document color='royalblue' size={24} />
      {/* <br /> */}
      <Document size={48} />
      <Document color='crimson' size={48} />
      <Document color='teal' size={48} />
      {/* <br /> */}
      <DocumentText />
      {/* <br /> */}
      <DocumentText color='darkorange' size={24} />
      <DocumentText color='darkmagenta' size={24} />
      <DocumentText color='royalblue' size={24} />
      {/* <br /> */}
      <DocumentText size={48} />
      <DocumentText color='crimson' size={48} />
      <DocumentText color='teal' size={48} />
      {/* <br /> */}
      <DocumentX />
      {/* <br /> */}
      <DocumentX color='darkorange' size={24} />
      <DocumentX color='darkmagenta' size={24} />
      <DocumentX color='royalblue' size={24} />
      {/* <br /> */}
      <DocumentX size={48} />
      <DocumentX color='crimson' size={48} />
      <DocumentX color='teal' size={48} />
      {/* <br /> */}
      <Droid />
      {/* <br /> */}
      <Droid color='darkorange' size={24} />
      <Droid color='darkmagenta' size={24} />
      <Droid color='royalblue' size={24} />
      {/* <br /> */}
      <Droid size={48} />
      <Droid color='crimson' size={48} />
      <Droid color='teal' size={48} />
      {/* <br /> */}
      <Folder />
      {/* <br /> */}
      <Folder color='darkorange' size={24} />
      <Folder color='darkmagenta' size={24} />
      <Folder color='royalblue' size={24} />
      {/* <br /> */}
      <Folder size={48} />
      <Folder color='crimson' size={48} />
      <Folder color='teal' size={48} />
      {/* <br /> */}
      <FolderDip />
      {/* <br /> */}
      <FolderDip color='darkorange' size={24} />
      <FolderDip color='darkmagenta' size={24} />
      <FolderDip color='royalblue' size={24} />
      {/* <br /> */}
      <FolderDip size={48} />
      <FolderDip color='crimson' size={48} />
      <FolderDip color='teal' size={48} />
      {/* <br /> */}
      <Heart />
      {/* <br /> */}
      <Heart color='darkorange' size={24} />
      <Heart color='darkmagenta' size={24} />
      <Heart color='royalblue' size={24} />
      {/* <br /> */}
      <Heart size={48} />
      <Heart color='crimson' size={48} />
      <Heart color='teal' size={48} />
      {/* <br /> */}
      <Horse />
      {/* <br /> */}
      <Horse color='darkorange' size={24} />
      <Horse color='darkmagenta' size={24} />
      <Horse color='royalblue' size={24} />
      {/* <br /> */}
      <Horse size={48} />
      <Horse color='crimson' size={48} />
      <Horse color='teal' size={48} />
      {/* <br /> */}
      <Intersect />
      {/* <br /> */}
      <Intersect color='darkorange' size={24} />
      <Intersect color='darkmagenta' size={24} />
      <Intersect color='royalblue' size={24} />
      {/* <br /> */}
      <Intersect size={48} />
      <Intersect color='crimson' size={48} />
      <Intersect color='teal' size={48} />
      {/* <br /> */}
      <Mail />
      {/* <br /> */}
      <Mail color='darkorange' size={24} />
      <Mail color='darkmagenta' size={24} />
      <Mail color='royalblue' size={24} />
      {/* <br /> */}
      <Mail size={48} />
      <Mail color='crimson' size={48} />
      <Mail color='teal' size={48} />
      {/* <br /> */}
      <Medium />
      {/* <br /> */}
      <Medium color='darkorange' size={24} />
      <Medium color='darkmagenta' size={24} />
      <Medium color='royalblue' size={24} />
      {/* <br /> */}
      <Medium size={48} />
      <Medium color='crimson' size={48} />
      <Medium color='teal' size={48} />
      {/* <br /> */}
      <Microphone />
      {/* <br /> */}
      <Microphone color='darkorange' size={24} />
      <Microphone color='darkmagenta' size={24} />
      <Microphone color='royalblue' size={24} />
      {/* <br /> */}
      <Microphone size={48} />
      <Microphone color='crimson' size={48} />
      <Microphone color='teal' size={48} />
      {/* <br /> */}
      <MusicNotesAngled />
      {/* <br /> */}
      <MusicNotesAngled color='darkorange' size={24} />
      <MusicNotesAngled color='darkmagenta' size={24} />
      <MusicNotesAngled color='royalblue' size={24} />
      {/* <br /> */}
      <MusicNotesAngled size={48} />
      <MusicNotesAngled color='crimson' size={48} />
      <MusicNotesAngled color='teal' size={48} />
      {/* <br /> */}
      <MusicNotesStraight />
      {/* <br /> */}
      <MusicNotesStraight color='darkorange' size={24} />
      <MusicNotesStraight color='darkmagenta' size={24} />
      <MusicNotesStraight color='royalblue' size={24} />
      {/* <br /> */}
      <MusicNotesStraight size={48} />
      <MusicNotesStraight color='crimson' size={48} />
      <MusicNotesStraight color='teal' size={48} />
      {/* <br /> */}
      <PencilLine />
      {/* <br /> */}
      <PencilLine color='darkorange' size={24} />
      <PencilLine color='darkmagenta' size={24} />
      <PencilLine color='royalblue' size={24} />
      {/* <br /> */}
      <PencilLine size={48} />
      <PencilLine color='crimson' size={48} />
      <PencilLine color='teal' size={48} />
      {/* <br /> */}
      <PenNib />
      {/* <br /> */}
      <PenNib color='darkorange' size={24} />
      <PenNib color='darkmagenta' size={24} />
      <PenNib color='royalblue' size={24} />
      {/* <br /> */}
      <PenNib size={48} />
      <PenNib color='crimson' size={48} />
      <PenNib color='teal' size={48} />
      {/* <br /> */}
      <ProfileCircle />
      {/* <br /> */}
      <ProfileCircle color='darkorange' size={24} />
      <ProfileCircle color='darkmagenta' size={24} />
      <ProfileCircle color='royalblue' size={24} />
      {/* <br /> */}
      <ProfileCircle size={48} />
      <ProfileCircle color='crimson' size={48} />
      <ProfileCircle color='teal' size={48} />
      {/* <br /> */}
      <Rewind />
      {/* <br /> */}
      <Rewind color='darkorange' size={24} />
      <Rewind color='darkmagenta' size={24} />
      <Rewind color='royalblue' size={24} />
      {/* <br /> */}
      <Rewind size={48} />
      <Rewind color='crimson' size={48} />
      <Rewind color='teal' size={48} />
      {/* <br /> */}
      <Star />
      {/* <br /> */}
      <Star color='darkorange' size={24} />
      <Star color='darkmagenta' size={24} />
      <Star color='royalblue' size={24} />
      {/* <br /> */}
      <Star size={48} />
      <Star color='crimson' size={48} />
      <Star color='teal' size={48} />
      {/* <br /> */}
      <Table />
      {/* <br /> */}
      <Table color='darkorange' size={24} />
      <Table color='darkmagenta' size={24} />
      <Table color='royalblue' size={24} />
      {/* <br /> */}
      <Table size={48} />
      <Table color='crimson' size={48} />
      <Table color='teal' size={48} />
      {/* <br /> */}
      <VolumeOff />
      {/* <br /> */}
      <VolumeOff color='darkorange' size={24} />
      <VolumeOff color='darkmagenta' size={24} />
      <VolumeOff color='royalblue' size={24} />
      {/* <br /> */}
      <VolumeOff size={48} />
      <VolumeOff color='crimson' size={48} />
      <VolumeOff color='teal' size={48} />
      {/* <br /> */}
      <Warning />
      {/* <br /> */}
      <Warning color='darkorange' size={24} />
      <Warning color='darkmagenta' size={24} />
      <Warning color='royalblue' size={24} />
      {/* <br /> */}
      <Warning size={48} />
      <Warning color='crimson' size={48} />
      <Warning color='teal' size={48} />
      {/* <br /> */}
      <WifiFull />
      {/* <br /> */}
      <WifiFull color='darkorange' size={24} />
      <WifiFull color='darkmagenta' size={24} />
      <WifiFull color='royalblue' size={24} />
      {/* <br /> */}
      <WifiFull size={48} />
      <WifiFull color='crimson' size={48} />
      <WifiFull color='teal' size={48} />
      {/* <br /> */}
      <WifiLow />
      {/* <br /> */}
      <WifiLow color='darkorange' size={24} />
      <WifiLow color='darkmagenta' size={24} />
      <WifiLow color='royalblue' size={24} />
      {/* <br /> */}
      <WifiLow size={48} />
      <WifiLow color='crimson' size={48} />
      <WifiLow color='teal' size={48} />
      {/* <br /> */}
      <WifiNone />
      {/* <br /> */}
      <WifiNone color='darkorange' size={24} />
      <WifiNone color='darkmagenta' size={24} />
      <WifiNone color='royalblue' size={24} />
      {/* <br /> */}
      <WifiNone size={48} />
      <WifiNone color='crimson' size={48} />
      <WifiNone color='teal' size={48} />

      {/* <br /> */}
      <SmileyMeh />
      {/* <br /> */}
      <SmileyMeh color='darkorange' size={24} />
      <SmileyMeh color='darkmagenta' size={24} />
      <SmileyMeh color='royalblue' size={24} />
      {/* <br /> */}
      <SmileyMeh size={48} />
      <SmileyMeh color='crimson' size={48} />
      <SmileyMeh color='teal' size={48} />
    </div>
  )
}

export default App
