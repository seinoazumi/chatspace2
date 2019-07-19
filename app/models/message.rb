class Message < ApplicationRecord
  belongs_to :group
  belongs_to :user

  validates :text, presence: true, unless: :image?

  mount_uploader :image, ImageUploader

  def show_last_message
    if(last_message = messages.last).present?
      last_message.text? ? last_message.text : '画像が投稿されています'  
    else
      'まだメッセージはありません'
    end
  end
end
