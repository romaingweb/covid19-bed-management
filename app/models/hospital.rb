class Hospital < ApplicationRecord
  def gid
    to_sgid(expires_in: nil).to_s
  end
end
