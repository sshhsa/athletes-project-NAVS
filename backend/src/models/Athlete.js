import { Schema, model } from "mongoose";

const athleteSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    sport: {
      type: String,
      required: [true, "Sport is required"],
    },
    country: {
      type: String,
      required: [true, "Country is required"],
    },
    dateOfBirth: {
      type: Date,
      required: [true, "Date of birth is required"],
    },
    avatarURL: {
      type: String,
      default: null,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { versionKey: false, timestamps: true },
);

export const Athlete = model("Athlete", athleteSchema);
