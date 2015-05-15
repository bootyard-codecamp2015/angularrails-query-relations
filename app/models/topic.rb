class Topic
  include Mongoid::Document
  include Mongoid::Timestamps

  field :title
  field :description

  has_many :votes
end