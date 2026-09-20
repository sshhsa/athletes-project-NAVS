import { ctrlWrapper } from "../helpers/ctrlWrapper.js";
import { HttpError } from "../helpers/HttpError.js";
import { Athlete } from "../models/Athlete.js";

const getAll = async (req, res) => {
  const athletes = await Athlete.find({ owner: req.user._id });

  res.json(athletes);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const athlete = await Athlete.findOne({ _id: id, owner: req.user._id });

  if (!athlete) {
    throw HttpError(404, "Athlete not found");
  }

  res.json(athlete);
};

const create = async (req, res) => {
  const newAthlete = await Athlete.create({
    ...req.body,
    owner: req.user._id,
  });

  res.status(201).json(newAthlete);
};

const update = async (req, res) => {
  const { id } = req.params;

  const updatedAthlete = await Athlete.findOneAndUpdate(
    { _id: id, owner: req.user._id },
    req.body,
    { new: true },
  );

  if (!updatedAthlete) {
    throw HttpError(404, "Athlete not found");
  }

  res.json(updatedAthlete);
};

const remove = async (req, res) => {
  const { id } = req.params;

  const deletedAthlete = await Athlete.findOneAndDelete({
    _id: id,
    owner: req.user._id,
  });

  if (!deletedAthlete) {
    throw HttpError(404, "Athlete not found");
  }

  res.json({ message: "Athlete deleted" });
};

export const athleteControllers = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  create: ctrlWrapper(create),
  update: ctrlWrapper(update),
  remove: ctrlWrapper(remove),
};
