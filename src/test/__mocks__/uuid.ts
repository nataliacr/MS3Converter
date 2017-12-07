const uuid: any = jest.genMockFromModule('uuid');

uuid.v4 = jest.fn(() => 'uuid');

module.exports = uuid;