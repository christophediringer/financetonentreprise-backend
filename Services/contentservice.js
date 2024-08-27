const Content = require('../Models/Content');
const User = require('../Models/User');
const Category = require('../Models/Category');

class ContentsService {
    async getAllContents() {
        return await Content.findAll({
            include: [
                { model: User, attributes: ['id', 'first_name', 'last_name'] },
                { model: Category, attributes: ['id', 'name'] }
            ]
        });
    }

    async getContentById(id) {
        return await Content.findByPk(id, {
            include: [
                { model: User, attributes: ['id', 'first_name', 'last_name'] },
                { model: Category, attributes: ['id', 'name'] }
            ]
        });
    }

    async createContent(contentData) {
        return await Content.create(contentData);
    }

    async updateContent(id, contentData) {
        const content = await Content.findByPk(id);
        if (content) {
            return await content.update(contentData);
        }
        return null;
    }

    async deleteContent(id) {
        const content = await Content.findByPk(id);
        if (content) {
            await content.destroy();
            return true;
        }
        return false;
    }
}

module.exports = new ContentsService();