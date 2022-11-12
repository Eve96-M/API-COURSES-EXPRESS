const videosServices = require("../services/videos.services");

const createVideo = async (req, res, next) => {
    try {
        const newVideo = req.body;
        const result = await videosServices.addVideo(newVideo);
        res.status(201).json(result);
    } catch (error) {
        console.log(error)
    }
}

const deleteVideo = async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await videosServices.deleteVideo(id);
      res.status(204).json(result);
    } catch (error) {
      console.log(error);
    }
  };

module.exports = {createVideo, deleteVideo}