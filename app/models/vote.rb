class Vote
  include Mongoid::Document
  include Mongoid::Timestamps

  belongs_to :topic
end