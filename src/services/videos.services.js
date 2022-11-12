const Videos = require("../models/videos.models");


class videosServices{

    static async addVideo(newVideo) {
        try {
          const result = await Videos.create(newVideo);
          return result;
        } catch (error) {
          throw error;
        }
      }

      static async deleteVideo(id) {
        try {
          const result = await Videos.destroy({
            where: { id },
          });
          return result;
        } catch (error) {
          throw error;
        }
      }

}

module.exports = videosServices